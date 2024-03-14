//import { maze } from '../../../../constants';
import { Cell } from './components';
import { UnitsLayer } from '../units-layer/units-layer';
import styled from 'styled-components';
import { CharacterLayer } from '../character-layer/character-layer';

const MazeContainer = ({ className, mazeLayer, unitsLayer, characterLayer }) => {
	return (
		<div className={className}>
			{mazeLayer.map((row, i) => (
				<div key={i}>
					{row.map((val, j) => (
						<Cell key={i * row.length + j} val={val} />
					))}
				</div>
			))}
			<UnitsLayer unitsLayer={unitsLayer} />
			<CharacterLayer characterLayer={characterLayer} />
		</div>
	);
};

export const Maze = styled(MazeContainer)`
	position: relative;
	display: flex;
	flex-wrap: nowrap;
`;
