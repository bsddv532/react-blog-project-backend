const express = require("express");

const articleRouter = express.Router();
const articleController = require("../Controllers/article");

articleRouter.route("/article/:categoryName/:ID")
    .get(articleController.article)

module.exports = articleRouter;