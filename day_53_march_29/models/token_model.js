const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    tokenId:{},
    token:{},
    createdAt:{}
});
// Create a Model
const tokenModel = mongoose.model('Token', tokenSchema);
module.exports = tokenModel
