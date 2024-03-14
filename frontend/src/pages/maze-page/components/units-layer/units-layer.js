import { UnitsLayerCell } from './components';
import styled from 'styled-components';

const UnitsLayerContainer = ({ className, unitsLayer }) => {
	return (
		<div className={className}>
			{unitsLayer.map((row, i) => (
				<div key={i}>
					{row.map((val, j) => (
						<UnitsLayerCell key={i * row.length + j} val={val} />
					))}
				</div>
			))}
		</div>
	);
};

export const UnitsLayer = styled(UnitsLayerContainer)`
	position: absolute;
	top: 0px;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	z-index: 20;
`;
