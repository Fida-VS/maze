import { ReviewContent, ReviewForm } from './components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadReviewAsync, RESET_REVIEW_DATA } from '../../actions';
import { selectReview } from '../../selectors';
import { Error } from '../../components';


const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isCreating = !!useMatch('/review');
	const isEditing = !!useMatch('/review/:id/edit');
	const review = useSelector(selectReview);


	useLayoutEffect(() => {
		dispatch(RESET_REVIEW_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadReviewAsync(params.id)).then((reviewData) => {
			setError(reviewData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return null;
	}


	const SpecificReviewPage =
		isCreating || isEditing ? (
				<div className={className}>
					<ReviewForm review={review} />
				</div>
		) : (
			<div className={className}>
				<ReviewContent review={review} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificReviewPage;
};

export const Review = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
