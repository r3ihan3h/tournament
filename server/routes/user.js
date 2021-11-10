let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let userController = require('../controllers/user');

// helper function for guard purposes
function requireAuth(req, res, next){
    // check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

// GET Route for user list page - Read Operation
router.get('/', userController.displayUserList);

// Get route for add page - create operation
router.get('/add', requireAuth, userController.displayAddPage);

// Post route for processing add page - create operation
router.post('/add', requireAuth, userController.processAddPage);

// Get route for edit page - update operation
router.get('/edit/:id', requireAuth, userController.displayEditPage);

// Post route for processing edit page - update operation
router.post('/edit/:id', requireAuth, userController.processEditPage);

// Get to perform deletion - delete operation
router.get('/delete/:id', requireAuth, userController.performDelete);

module.exports = router;