import styled from 'styled-components';

const CellContainer = ({className, val}) => {

	return <div className={className}></div>

};

export const Cell = styled(CellContainer)`
		color: red;
		border: 1px solid rgb(128,128,128, 0.2);
		width: 32px;
		height: 32px;
	    background-color: ${({val}) => (val === 1 ? 'black' : 'gainsboro')};
`;
