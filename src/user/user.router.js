const express = require("express");
const router = express.Router();
const userController = require('./user.controller');

let users = [];

router.get('/', function (req, res) {
    return res.send('get')
}); //api/user 
router.get('/all', function (req, res) {
    return res.send({
        data: users
    })
}); //api/user
router.post('/create', function (req, res) {
    let newUser = req.body;
    users.push(newUser);
    return res.send({
        data: users
    })
}); //api/user 
router.put('/update', function (req, res) {
    return res.send('put')
    
}); //api/user 
router.delete('/delete', function (req, res) {
    return res.send('delete')
}); //api/user 
 

//router.post // createUser

//router.put // updateUser

module.exports = router;