import { ACTION_TYPE } from "../actions";

const initialReviewState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
};

export const reviewReducer = (state = initialReviewState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_REVIEW_DATA:
			return {
				...state,
				...action.payload,
			};
			case ACTION_TYPE.RESET_REVIEW_DATA:
			return initialReviewState;
		default:
			return state;
	}
};
