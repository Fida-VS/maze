const Review = require('../models/Review')

//add

async function addReview(review){
    const newReview = await Review.create(review);

    await newReview.populate('author');

    return newReview;


}


// edit
async function editReview(id, review) {
    const newReview = await Review.findByIdAndUpdate(id, review, { returnDocument: 'after' })

	await newReview.populate('author');

    return newReview;
}



//delete
function deleteReview(id){
    return Review.deleteOne({ _id: id })
}

//get list with search and pagination
async function getReviews(search = '', limit = 10, page = 1){
const [reviews, count] = await Promise.all([
    Review.find({title: {$regex: search, $options: 'i'}})
    .limit(limit)
    .skip((page - 1)*limit)
    .sort({createdAt: -1})
	.populate('author'),
    Review.countDocuments({title: {$regex: search, $options: 'i'}})
])

return {
    reviews,
    lastPage: Math.ceil(count / limit)
}
}

//get item
function getReview(id){
    return Review.findById(id).populate('author');
}


module.exports = {
    addReview,
    editReview,
    deleteReview,
    getReviews,
    getReview
}
