import { request } from '../utils';
import { setReviewData } from './set-review-data';

export const loadReviewAsync = (reviewId) => (dispatch) =>
request(`/reviews/${reviewId}`).then((reviewData) => {
	if (reviewData.data) {
		dispatch(setReviewData(reviewData.data));
	}
	return reviewData;
});







