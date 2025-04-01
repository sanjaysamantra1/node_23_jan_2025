const jsonwebtoken = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../config/jwt.config');

const generateAccessToken = function (user) {
    return jsonwebtoken.sign({ userId: user._id, name: user.name },
        ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
}
const generateRefreshToken = function (user) {
    return jsonwebtoken.sign({ userId: user._id, name: user.name },
        REFRESH_TOKEN_SECRET, { expiresIn: '2m' });
}

module.exports = {
    generateAccessToken, generateRefreshToken
}