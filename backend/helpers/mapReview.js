
module.exports = function(review){
    return {
        id: review.id,
        author: review.author.login,
        title: review.title,
        imageUrl: review.image,
        content: review.content,
        publishedAt: review.createdAt,
    }
}
