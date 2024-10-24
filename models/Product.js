const mongoose = require("mongoose");

//const reviewSchema = mongoose.Schema({
//    name: { type: String, required: true },
//    rating: { type: Number, required: true },
//    Comment: { type: String, required: true },
//    user: { type: mongoose.Schema.Type.ObjectID, required: true, ref: "User"},
//});


const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReview: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },

        //reviews : [reviewSchema],
    });

module.exports = mongoose.model("Product", productSchema)