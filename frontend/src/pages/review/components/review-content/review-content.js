import styled from 'styled-components';
import { H2, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useNavigate } from 'react-router-dom';

const ReviewContentContainer = ({
	className,
	review: { id, author, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<SpecialPanel
				id={id}
				author={author}
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square"
						margin="0 10px 0 0"
						size="21px"
						onClick={() => navigate(`/review/${id}/edit`)}
					/>
				}
			/>
			<H2>{title}</H2>

			<div className="review-text">{content}</div>
		</div>
	);
};

export const ReviewContent = styled(ReviewContentContainer)`

background-color: rgba(255, 255, 255, 0.5);
border-radius: 15px;
padding: 50px;

	& img {
		float: left;
		margin: 0 20px 10px 0;
		display: block;
		padding: 10px 0 10px 10px;
		width: 120px;
		height: 130px;
	}

	& .review-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
