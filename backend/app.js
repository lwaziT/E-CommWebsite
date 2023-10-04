const express = require("express");
const Errorhandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser);
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}
// For ErrorHandling
app.use(Errorhandler)

module.exports = app;