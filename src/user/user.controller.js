exports.getUsers = function(req, res) {
    let users = [ 'Rafael', 'Paul', 'John'];
    res.send(users);
}