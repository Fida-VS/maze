import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';
import { saveReviewAsync } from '../../../../actions';
import { selectUserId } from '../../../../selectors';
import { AVATARS } from '../../../../constants';


const ReviewFormContainer = ({
	className,
	review: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitlelValue] = useState(title);
	const [contentValue, setContentValue] = useState(content);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitlelValue(title);
		setContentValue(content);
	}, [imageUrl, title, content])

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userId = useSelector(selectUserId);

	const onSave = () => {

		const newContent = sanitizeContent(contentValue);


		dispatch(
			saveReviewAsync(id, {
				userId,
				imageUrl: imageUrlValue ? imageUrlValue : AVATARS.SMILING,
				title: titleValue,
				content: newContent,
			}),
		).then(({id}) => navigate(`/review/${id}`));
	};

	const onImageChange = ({target}) => setImageUrlValue(target.value);
	const onTitleChange = ({target}) => setTitlelValue(target.value);
	const onContentChange = ({target}) => setContentValue(target.value);


	const getSmileAvatar = (number) => {

		switch(number) {
			case 1:
			setImageUrlValue(AVATARS.PARTYING);
			  break;

			case 2:
			setImageUrlValue(AVATARS.CROWN);
			  break;

			  case 3:
			setImageUrlValue(AVATARS.HEART);
			  break;

			  case 4:
			setImageUrlValue(AVATARS.SMILING);
			  break;

			  case 5:
			setImageUrlValue(AVATARS.SMIRK);
			  break;

			  case 6:
			setImageUrlValue(AVATARS.MONOCLE);
			  break;

			  case 7:
			setImageUrlValue(AVATARS.WOOZY);
			  break;

			  case 8:
			setImageUrlValue(AVATARS.LYING);
			  break;

			  case 9:
			setImageUrlValue(AVATARS.SAD);
			  break;

			  case 10:
			setImageUrlValue(AVATARS.DEVIL);
			  break;

			  case 11:
			setImageUrlValue(AVATARS.RAGE);
			  break;

			  case 12:
			setImageUrlValue(AVATARS.CENSORED);
			  break;

			default:
			  break;
		  }

	}

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Выберите смайлик ниже или вставьте ссылку на изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={<Icon id="fa-hdd" size="21px" margin="0 10px 0 0 " onClick={onSave} />}
				getSmileAvatar={getSmileAvatar}
			/>
			<textarea
				value={contentValue}
				onChange={onContentChange}
				className="review-text"
			>
				{content}
			</textarea>
		</div>
	);
};

export const ReviewForm = styled(ReviewFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .review-text {
		min-height: 200px;
		width: 100%;
		border: 1px solid #000;
		font-size: 18px;
		white-space: pre-line;
		padding: 10px 20px;
		background-color: rgba(255, 255, 255, 0.5);
	}
`;



