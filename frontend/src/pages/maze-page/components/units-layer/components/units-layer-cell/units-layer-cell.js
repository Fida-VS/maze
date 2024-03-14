import { MAZE_IMAGES } from '../../../../../../constants';
import styled from 'styled-components';

const UnitsLayerCellContainer = ({ className, val }) => {
	return (
		<div className={className}>
			{val === 5 && <img className="smile" src={MAZE_IMAGES.HOLE} alt="smile" />}
		</div>
	);
};

export const UnitsLayerCell = styled(UnitsLayerCellContainer)`
	border: 1px solid rgb(128, 128, 128, 0.2);
	width: 32px;
	height: 32px;
	background-color: transparent;

	& .circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: ${({ val }) => (val === 5 ? 'green' : 'transparent')};
	}
`;
