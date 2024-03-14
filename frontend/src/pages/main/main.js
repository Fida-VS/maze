import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = ({ className }) => {

	return (
		<div className={className}>
			<button>
			<Link to="/login">Вход</Link>
			  </button>
			  <button>
			<Link to="/register">Регистрация</Link>
			  </button>
              <button>
			<Link to="/description">Описание</Link>
			  </button>
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
		width: 35%;
		height: 60px;
		font-weight: bold;
		font-size: 18px;
		margin-bottom: 70px;
	}

	& a {
		text-decoration: none;
		color: #000;
	}
`;
