const config = require("./src/config/config");
const express = require("express");
const bodyParser = require("body-parser");

//require("./src/config/alfredo");

const app = express();
app.use(bodyParser.json());
//app.use(cors());

require("./src/config/routers")(app)

app.listen(config.port, () => { 
    console.log("App is running on port" + config.port);
});