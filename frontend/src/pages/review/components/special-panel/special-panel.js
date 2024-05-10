import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { CLOSE_MODAL, openModal, removeReviewAsync } from '../../../../actions';
import { checkAccess } from '../../../../utils';
import { ROLE } from '../../../../constants/role';
import { selectUserRole } from '../../../../selectors';
import { AVATARS } from '../../../../constants';

const SpecialPanelContainer = ({ className, id, author, publishedAt, editButton, getSmileAvatar }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);

	const onReviewRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить отзыв?',
				onConfirm: () => {
					dispatch(removeReviewAsync(id)).then(() => {
						navigate('/reviews');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);




	return (
		<div className={className}>
			<div className="author">{author}</div>

			{publishedAt && !isAdmin && (
				<div className="published-at">
					<Icon
						inactive={true}
						id="fa-calendar"
						margin="0 7px 0 0"
						size="18px"
					/>
					{publishedAt.substring(0, 16).replace('T', ' ')}
				</div>
			)}

			{publishedAt && isAdmin && (
				<>
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar"
							margin="0 7px 0 0"
							size="18px"
						/>
						{publishedAt.substring(0, 16).replace('T', ' ')}
					</div>
					<div className="buttons">
						{editButton}
						<Icon
							id="fa-trash"
							size="20px"
							margin="0 0 0 7px"
							onClick={() => onReviewRemove(id)}
						/>
					</div>
				</>
			)}

			{!publishedAt && <div className="buttons">
			    <img src={AVATARS.PARTYING} alt="partying" onClick={() => getSmileAvatar(1)}/>
				<img src={AVATARS.CROWN} alt="crown" onClick={() => getSmileAvatar(2)}/>
				<img src={AVATARS.HEART} alt="heart" onClick={() => getSmileAvatar(3)}/>
				<img src={AVATARS.SMILING} alt="smiling" onClick={() => getSmileAvatar(4)}/>
				<img src={AVATARS.SMIRK} alt="smirk" onClick={() => getSmileAvatar(5)}/>
				<img src={AVATARS.MONOCLE} alt="monocle" onClick={() => getSmileAvatar(6)}/>
				<img src={AVATARS.WOOZY} alt="woozy" onClick={() => getSmileAvatar(7)}/>
				<img src={AVATARS.LYING} alt="lying" onClick={() => getSmileAvatar(8)}/>
				<img src={AVATARS.SAD} alt="sad" onClick={() => getSmileAvatar(9)}/>
				<img src={AVATARS.DEVIL} alt="devil" onClick={() => getSmileAvatar(10)}/>
				<img src={AVATARS.RAGE} alt="rage" onClick={() => getSmileAvatar(11)}/>
				<img src={AVATARS.CENSORED} alt="censored" onClick={() => getSmileAvatar(12)}/>
				{editButton}
				</div>}
		</div>
	);
};



export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
		margin-left: -200px;
	}

	& .buttons {
		display: flex;
	}

	& .buttons img {
		width: 30px;
		height: 30px;
	}

	& i {
		position: relative;
		top: -1px;
	}
`;



SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
