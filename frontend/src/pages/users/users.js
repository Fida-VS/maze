import { H2, Loader, PrivateContent } from '../../components';
import { UserRow, TableRow } from './components';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ROLE } from '../../constants/role';
import { checkAccess, request } from '../../utils';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const userRole = useSelector(selectUserRole);

	useEffect(() => {

		if(!checkAccess([ROLE.ADMIN], userRole)){
			return;
		}

		setIsLoading(true);

		Promise.all([request('/users'), request('/users/roles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.data);
				setRoles(rolesRes.data);
			},
		)
		.finally(() => setIsLoading(false));
	}, [shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {

		if(!checkAccess([ROLE.ADMIN], userRole)){
			return;
		}
		request(`/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (

			<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
				<div className={className}>
				<H2>Пользователи</H2>
				{isLoading
				? (<Loader />)
				:
				(<div>
					<TableRow className="table-row-top">
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>)}
				</div>
			</PrivateContent>

	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	margin: 0 auto;
	flex-direction: column;
	width: 570px;
	margin-bottom: 60px;

	.table-row-top{
		margin-left: 35px;
		font-weight: bold;
	}


	.table-row-top .role-column{
		margin-left: 50px;
	}
`;
