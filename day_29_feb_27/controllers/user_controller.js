const users = require('../../data/users.json');

const getAllUsers = (req, res) => {
    res.status(200).json(users)
}
const get1User = (req, res) => {
    let user = users.find(user => user.id == req.params.id);
    res.status(200).json(user)
}
const addNewUser = (req, res) => {
    res.send('User Added')
}
const updateUser = (req, res) => {
    res.send('User Updated')
}
const deleteUser = (req, res) => {
    res.send('User Deleted')
}

module.exports = { getAllUsers, get1User, addNewUser, updateUser, deleteUser }