const express = require("express");


const homeRouter = express.Router();
const homeController = require("../Controllers/home");

homeRouter.route("/")
    .get(homeController.home)

module.exports = homeRouter;