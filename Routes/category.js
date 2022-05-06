const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../Controllers/category");

categoryRouter.route("/:categoryName")
    .get(categoryController.category)

module.exports = categoryRouter;