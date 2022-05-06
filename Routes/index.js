const express = require("express");

const router = express.Router();
const homeRouter = require("./home");
const categoryRouter = require("./category");
const articleRouter = require("./article");

router.use("/blog", homeRouter);
router.use("/blog", categoryRouter);
router.use("/blog", articleRouter);


module.exports=router;