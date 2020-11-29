const express = require("express");
const userRouter = require('../user/user.router');
const employeeRouter = require('../employee/employee.router');


let routers = function (app) {
    app.use("/api/user", userRouter); // *.use allows you to do something 
    app.use("/api/employee", employeeRouter); 
    app.get("/api", (req, res) => {
        res.send("Welcome to our API!");
    
    });
}



module.exports = routers;



