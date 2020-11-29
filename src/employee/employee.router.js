let express = require("express");
const { route } = require("../user/user.router");
let router = express.Router();

let workers = [
    {
        name: "John",
        age: 37
    },
]



router.get("/get", function(req, res) {
    res.send(workers);
});

router.post("/post", function(req, res) {
    workers.push({
        name: "aaa", 
        age: 52
    })
    res.send(workers);
});

router.put("/put", function(req, res) {
    workers[1] = {
        name: "bbbb",
        age: 99
    }
    res.send(workers);
});

router.delete("/delete", function(req, res) {
    workers.splice(1,3);
    res.send(workers);
});

module.exports = router;