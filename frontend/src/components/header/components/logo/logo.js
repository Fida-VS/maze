import { MAZE_IMAGES } from '../../../../constants';
import styled from 'styled-components';


const LargeText = styled.div`
font-size: 42px;
font-weight: 500;
line-height: 48px;
color: #000;
text-shadow:
-0   -1px 0   #FFFFFF,
0   -1px 0   #FFFFFF,
-0    1px 0   #FFFFFF,
0    1px 0   #FFFFFF,
-1px -0   0   #FFFFFF,
1px -0   0   #FFFFFF,
-1px  0   0   #FFFFFF,
1px  0   0   #FFFFFF,
-1px -1px 0   #FFFFFF,
1px -1px 0   #FFFFFF,
-1px  1px 0   #FFFFFF,
1px  1px 0   #FFFFFF,
-1px -1px 0   #FFFFFF,
1px -1px 0   #FFFFFF,
-1px  1px 0   #FFFFFF,
1px  1px 0   #FFFFFF;

margin-top: 15px;
margin-left: -28px;

`;


const LogoContainer = ({className}) => (
	<div className={className}>
		<img src={MAZE_IMAGES.LOGO} alt='logo'/>
	<div>
		<LargeText>Лабиринт</LargeText>
	</div>
	</div>
);


export const Logo = styled(LogoContainer)`
display: flex;
margin-top: 0px;
margin-left: -10px;
text-decoration: none;
color: black;

& img {
	width: 70px;
	height: 70px;
	margin: 15px;
	margin-top: 7px;
	border-radius: 10px;
}
`;
