const mongoose = require('mongoose');
let { Schema } = mongoose;

let employeeSchema = new Schema({
    eId: { type: Number, required: true },
    name: { type: String, required: true },
    sal: { type: Number, required: true },
    gender: { type: String }
});

let employeeModel = mongoose.model("employees", employeeSchema);
module.exports = employeeModel;