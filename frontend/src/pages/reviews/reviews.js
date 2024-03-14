import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination, ReviewCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants/pagination-limit';
import { debounce } from './utils';
import styled from 'styled-components';
import { Icon, Loader } from '../../components';
import { Link } from 'react-router-dom';
import { ROLE } from '../../constants';
import { selectUserRole } from '../../selectors';
import { request } from '../../utils';

const ReviewsContainer = ({ className }) => {
	const [reviews, setReviews] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const userRole = useSelector(selectUserRole);

	const isGuest = userRole === ROLE.GUEST;

	useEffect(() => {
		setIsLoading(true);
		request(`/reviews?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`).then(
			({ data: { reviews, lastPage } }) => {
				setReviews(reviews);
				setLastPage(lastPage);
				setIsLoading(false);
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="reviews-and-search">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />
				{!isGuest && (
					<Link to="/review">
						<Icon id="fa fa-pencil" margin="10px 0 0 16px" />
					</Link>
				)}

				{isLoading && <Loader />}

				{reviews.length > 0 ? (
					<div className="review-list">
						{reviews.map(
							({ id, author, title, content, imageUrl, publishedAt }) => (
								<ReviewCard
									key={id}
									id={id}
									author={author}
									content={content}
									title={title}
									imageUrl={imageUrl}
									publishedAt={publishedAt}
								/>
							),
						)}
					</div>
				) : (
					<div className="no-reviews-found">Отзывы не найдены</div>
				)}
			</div>

			{lastPage > 1 && reviews.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Reviews = styled(ReviewsContainer)`
	
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .review-list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& .no-reviews-found {
		font-size: 18px;
		margin-top: 40px;
		text-align: center;
	}
`;
