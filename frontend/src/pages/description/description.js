import { H2 } from '../../components';
import { MAZE_IMAGES } from '../../constants';
import styled from 'styled-components';

export const DescriptionContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2>Описание игры</H2>
			<div className="text-box">
				<div className="definition">
					<img className="cover" src={MAZE_IMAGES.COVER} alt="cover" />
					<div className="definition-text">
						Игра "Лабиринт" - это головоломка, в которой игрок должен пройти
						через запутанные лабиринты, управляя маленьким отважным искателем
						приключений. В каждом лабиринте есть только один правильный путь,
						и ты должен найти его, чтобы пройти дальше. Используй логику и
						пространственное мышление. Удачи, герой!
					</div>
				</div>

				<div className="story">
					<div className="story-text">
						Жители деревушки настойчиво просят Счастливчика Джонса исследовать
						загадочные руины некогда в одночасье появившиеся в окрестностях
						поселения. По преданию эти подземелья не имеют конца, так как из
						них ещё никто не возвращался. Будучи настоящим искателем
						приключений, Счастливчик Джонс с радостью принимает их
						предложение. Что же ждёт его впереди?...
					</div>
					<img className="level" src={MAZE_IMAGES.LEVEL} alt="level" />
				</div>
			</div>
		</div>
	);
};

export const Description = styled(DescriptionContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	font-weight: bold;
	font-size: 18px;
	line-height: 30px;
	max-width: 800px;

	& H2 {
		text-align: center;
	}

	& .text-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.definition {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 25px;
	}

	.story {
		display: flex;
		justify-content: space-evenly;
	}

	& img {
		display: block;
	}

	& .cover,
	.level {
		width: 200px;
		height: 200px;
	}

	& .level {
		margin-left: 20px;
	}

	& .cover {
		margin-right: 20px;
	}
`;
