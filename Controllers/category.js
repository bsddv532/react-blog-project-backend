const data = require("../Database/database");

const category = (req, res) =>{
    if(req.params.categoryName){
        res.send(
            data.database.filter( value => value.Category === req.params.categoryName )
            
            // { item : req.params.categoryName}
        )
    }
    else{
        res.send("Error")
    }
}

module.exports.category = category;