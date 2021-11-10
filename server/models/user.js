let mongoose = require('mongoose');

// create model class
let userModel = mongoose.Schema({
    name: String,
    contact: String,
    email: String
},{
    collection: "users"
});

module.exports = mongoose.model('User', userModel);