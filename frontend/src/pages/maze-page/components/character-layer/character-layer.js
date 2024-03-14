import { CharacterLayerCell } from './components';
import styled from 'styled-components';


const CharacterLayerContainer = ({ className, characterLayer }) => {



	return (
		<div className={className}>
			{characterLayer.map((row, i) => (
				<div key={i}>
					{row.map((val, j) => (
						<CharacterLayerCell key={i * row.length + j} val={val} />
					))}
				</div>
			))}
		</div>
	);
};

export const CharacterLayer = styled(CharacterLayerContainer)`
	position: absolute;
	top: 0px;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	z-index: 30;

	& img {
		width: 32px;
		height: 32px;
	}
`;
