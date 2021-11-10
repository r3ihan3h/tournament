let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create reference to the DB schema (model)
let User = require('../models/user');

module.exports.displayUserList = (req, res, next) => {
    User.find((err, UserList) => {
        if(err){
            return console.error(err);
        }else{
            // console.log(UserList);
            res.render('user/list', {
                title: 'Business Contacts List', 
                UserList: UserList, 
                displayName: req.user ? req.user.displayName : ''}
            )
        }
    }).sort( { name: 1 } );
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('user/add', {title: 'Add User', displayName: req.user ? req.user.displayName : ''})
}

module.exports.processAddPage = (req, res, next) => {
    let newUser = User({
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email
    });

    User.create(newUser, (err, User) => {
        if(err){
            console.log(err);
            // stops server
            res.end(err);
        }else{
            // refresh user list
            res.redirect('/user-list');
        }
    })
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    
    //Find user by id
    User.findById(id, (err, userToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // show edit view
            res.render('user/edit', {title: 'Edit User', user: userToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedUser = User({
        "_id": id,
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email
    });

    //update model
    User.updateOne({_id: id}, updatedUser, (err) => {
        if(err){
            console.log(err);
        }else{
            // refresh user list
            res.redirect('/user-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    User.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
        }else{
            // refresh user list
            res.redirect('/user-list');
        }
    })
}