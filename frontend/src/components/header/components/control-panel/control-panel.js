import { Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants/role';
import { logout } from '../../../../actions';
import { Pentagon } from '../../../../components';
import { checkAccess } from '../../../../utils';
import styled from 'styled-components';


const RightAligned = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: -50px;
`;


const ControlPanelContainer = ({ className }) => {


	const navigate = useNavigate();

	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const userRole = useSelector(selectUserRole);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isGuest = userRole === ROLE.GUEST;

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);


	return (
		<div className={className}>
			<RightAligned>
				<Pentagon>
					<Icon
						id="fa-backward"
						size="19px"
						transform="rotate(-90deg)"
						margin="6px 0 0 0"
						onClick={() => navigate(-1)}
					/>
				</Pentagon>
				{!isGuest && (<Pentagon>
					<Link to="/maze">
						 <Icon
							id="fa fa-home"
							size="19px"
							margin="6px 0 0 0"
							transform="rotate(-90deg)"
						/>
					</Link>
				</Pentagon>)}
				{isGuest && (<Pentagon>
					<Link to="/">
						<Icon
							id="fa fa-home"
							size="19px"
							margin="6px 0 0 0"
							transform="rotate(-90deg)"

						/>
					</Link>
				</Pentagon>)}
				<Pentagon>
					<Link to="/info">
						<Icon
							id="fa fa-info-circle"
							size="19px"
							margin="6px 0 0 0"
							transform="rotate(-90deg)"

						/>
					</Link>
				</Pentagon>
				<Pentagon>
					<Link to="/achievements">
						<Icon
							id="fa-trophy"
							size="19px"
							margin="6px 0 0 0"
							transform="rotate(-90deg)"

						/>
					</Link>
				</Pentagon>

				<Pentagon>
					<Link to="/reviews">
						<Icon
							id="fa fa-file-text"
							size="19px"
							margin="6px 3px 0 1px"
							transform="rotate(-90deg)"
						/>
					</Link>
				</Pentagon>
				{isAdmin && (<Pentagon>
					<Link to="/users">
						<Icon
							id="fa-users"
							size="19px"
							margin="6px -3px 0 0"
							transform="rotate(-90deg)"

						/>
					</Link>
				</Pentagon>)}

				{(roleId === ROLE.ADMIN || roleId === ROLE.USER) && (
					<Icon id="fa-sign-out" margin="-40px 0 0 10px" onClick={onLogout} />
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
& .active {
color: red;
}
`;

