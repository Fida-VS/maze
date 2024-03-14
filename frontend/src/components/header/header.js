import { ControlPanel, Logo } from './components';
import styled from 'styled-components';


const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Box>
		<Logo />
		</Box>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #b2b2b2;
	z-index: 50;
`;
