import { H2 } from '../../components';
import styled from 'styled-components';


const AchievementsContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2 className="title">Мои достижения</H2>
			<H2>Раздел находится на стадии разработки.</H2>
			<H2>В дальнейшем на этой странице игрок сможет посмотреть свои достижения.</H2>

			</div>

	);
};

export const Achievements = styled(AchievementsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100px;
	margin-bottom: 630px;

	& H2 {
		display: block;
		margin-bottom: -20px;
	}

	& .title {
		margin-bottom: 20px;
	}
`;
