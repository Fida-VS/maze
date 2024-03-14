import { ACTION_TYPE } from "./action-type";

export const setReviewData = (reviewData) => ({
	type: ACTION_TYPE.SET_REVIEW_DATA,
	payload: reviewData,
});


