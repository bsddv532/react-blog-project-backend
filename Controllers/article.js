const data = require("../Database/database");

const article = (req, res) =>{
const{ID, categoryName} = req.params;
    
    
    if(ID && categoryName){
        res.send(
            data.database.filter( article => article.ID === ID && article.Category === categoryName)
        )
    }
    else{
        res.send(`No Data Found`);
    }
}

module.exports.article = article;