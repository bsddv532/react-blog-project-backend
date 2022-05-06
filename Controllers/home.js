const data = require("../Database/database");

const home = (req, res) =>{
    res.send(data.database);
}

module.exports.home = home;