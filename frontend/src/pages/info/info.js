import { H2 } from '../../components';
import styled from 'styled-components';

const InfoContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2 className="title">Управление</H2>
			<div className="wrapper">
				<div className="text">
					<div>Вверх</div>
					<div>Влево</div>
					<div>Вниз</div>
					<div>Вправо</div>
				</div>
				<div className="icons">
					<div>W</div>
					<div>A</div>
					<div>S</div>
					<div>D</div>
				</div>
			</div>
		</div>
	);
};

export const Info = styled(InfoContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
	margin-bottom: 430px;

	& .wrapper {
		width: 500px;
		display: flex;
		justify-content: space-between;
		font-size: 21px;
	}

	& H2 {
		display: block;
	}

	& .title {
		margin-bottom: 20px;
	}

	& .text {
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& .icons {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}



	& .icons div,
	.text div {
		width: 100px;
		height: 50px;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}

	& .text div {
		margin-bottom: 36px;
	}

	& .icons div {
		background-color: #e2e2e2;
		border-radius: 15px;
		border: 1px solid #000;
	}
`;
