const orderUserModel = require("../../models/allOrder")

async function allOrderUser(req,res){
    try{
        const allOrder = await orderUserModel.find()
        
        res.json({
            message : "All User",
            data : allOrder,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allOrderUser