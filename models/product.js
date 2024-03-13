const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    count: {type:Number},
    isLow: {type: Boolean},
    user: { type: mongoose.Types.ObjectId, ref: 'User'}
})


module.exports = mongoose.model("product", productSchema)