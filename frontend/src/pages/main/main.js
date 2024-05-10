import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components';

const MainContainer = ({ className }) => {

	return (
		<div className={className}>

			<Link to="/login"><Button>Вход</Button></Link>

			<Link to="/register"><Button>Регистрация</Button></Link>

			<Link to="/description"><Button>Описание</Button></Link>

		</div>
	);
};

export const Main = styled(MainContainer)`

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 750px;
		margin-bottom: -20px;


	& button {
		width: 100%;
		height: 60px;
		font-weight: bold;
		font-size: 18px;
		margin-bottom: 70px;
	}

	& a {
		width: 35%;
		text-decoration: none;
		color: #000;
	}
`;
