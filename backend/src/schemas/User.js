
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

module.exports = mongoose.model("Users", UserSchema);