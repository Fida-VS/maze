const mongoose = require('mongoose');
const validator = require('validator');


const ReviewSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: validator.isURL,
            message: 'Image should be a valid url'
        }
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;