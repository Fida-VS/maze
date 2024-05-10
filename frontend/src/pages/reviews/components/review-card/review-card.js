import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const ReviewCardContainer = ({
	className,
	id,
	author,
	title,
	content,
	imageUrl,
	publishedAt,
}) => {
	return (
		<div className={className}>
			<Link to={`/review/${id}`}>
				<div className="image-box">
					<img src={imageUrl} alt={title} />
				</div>

				<div className="review-card-text">
					<div className="review-card-info">
						<div className="author">{author}</div>
						<div className="published-at">
							<Icon
								inactive={true}
								id="fa-calendar"
								margin="0 7px 0 0"
								size="18px"
							/>
							{publishedAt.substring(0, 16).replace('T', ' ')}
						</div>
					</div>
					<h4>{title}</h4>
					<div className="review-text">{content.slice(0, 210) + '...'}</div>
				</div>
			</Link>
		</div>
	);
};

export const ReviewCard = styled(ReviewCardContainer)`
	display: flex;
	width: 75%;
	margin: 20px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 15px;

	& a {
		display: flex;
		text-decoration: none;
		color: #000;
	}

	& .image-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: 50%;
		flex-grow: 1;
	}

	& img {
		display: block;
		padding: 10px 0 10px 10px;
		width: 90px;
		height: 100px;
	}

	& .review-card-text {
		padding: 5px;
		flex-grow: 3;
	}

	& h4 {
		margin: 0;
	}

	& .review-card-info {
		display: flex;
		width: 630px;
		justify-content: space-between;
		margin: 5px 10px 5px 5px;
		font-weight: bold;
	}

	& .published-at {
		display: flex;
	}

	& .review-text {
		padding: 5px 10px 10px 0;
	}
`;


ReviewCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
