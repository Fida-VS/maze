import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>Лабиринт v.0.4</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
    left: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 25px;
	padding: 10px 0 10px 0;
	background-color: #b2b2b2;
	font-weight: bold;
	color: rgba(0, 0, 0, 0.2);
	z-index: 700;
`;
