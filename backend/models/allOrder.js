const mongoose = require('mongoose')

const allOrder = mongoose.Schema({
    allProduct: [],
    name: String,
    mobileNumber: Number,
    currentLocation: String,
},{
    timestamps : true
})


const allOrderModel = mongoose.model("allOrder",allOrder)

module.exports = allOrderModel