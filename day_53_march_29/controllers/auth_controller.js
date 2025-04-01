const bcrypt = require('bcrypt');
const userModel = require('../models/user_model');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt_utils');
const { REFRESH_TOKEN_SECRET } = require('../config/jwt.config');

exports.register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(200).send('User Added Successfully')
    } catch (err) {
        res.status(500).send(err)
    }
}
exports.login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            console.log('user not found');
            res.status(401).send({ auth: false, msg: 'No User Found, Plz Register' })
        } else {
            const passIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (!passIsValid) {
                res.status(401).send({ auth: false, msg: 'invalid password' })
            } else { // both email and password are correct
                const accessToken = generateAccessToken(user);
                const refreshToken = generateRefreshToken(user);
                res.send({ auth: true, expiresIn: 60, accessToken, refreshToken });
            }
        }
    } catch (err) {
        res.status(500).send(err)
    }
}
exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        res.status(401).send({ auth: false, msg: 'Refresh Token is Required to generate Access Token' })
    }
    try {
        jsonwebtoken.verify(refreshToken, REFRESH_TOKEN_SECRET);
        console.log('user',user)
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.send({ auth: true, expiresIn: 60, accessToken, refreshToken });
    } catch (err) {
        console.log('errrrrr')
        res.status(401).json(err);
    }
}
exports.logout = async (req, res) => {

}
