import { request } from "../utils";

export const removeReviewAsync = (id) => () =>
	request(`/reviews/${id}`, 'DELETE');





