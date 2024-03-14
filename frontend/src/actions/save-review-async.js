import { request } from "../utils";
import { setReviewData } from "./set-review-data";


export const saveReviewAsync = (id, newReviewData) => (dispatch) => {

	const saveRequest = id ?
	request(`/reviews/${id}`, 'PATCH', newReviewData) :
	request('/reviews', 'POST', newReviewData);


	return saveRequest.then((updatedReview) => {
		dispatch(setReviewData(updatedReview.data));

		return updatedReview.data;
	})
};






