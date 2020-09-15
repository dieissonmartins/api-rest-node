
//modulos
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String,
});

const model = mongoose.model("users", UserSchema);

module.exports = model;