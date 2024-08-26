const allOrderModel = require("../../models/allOrder");

async function allOrderController(req, res) {
  try {
    const { allProduct, name, mobileNumber, currentLocation} = req.body;

    
    const payload = {
        allProduct: allProduct,
        name: name,
        mobileNumber: mobileNumber,
        currentLocation: currentLocation,
    };

    const userData = new allOrderModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "Your order has been successfull.",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allOrderController;
