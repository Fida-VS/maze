import { Maze } from './components/maze/maze';
import { useEffect, useState } from 'react';
import { getMaze } from './utils/get-maze';
import { getUnits, getCharacter } from './utils';
import { SIZE_OF_SIDE } from '../../constants';
import styled from 'styled-components';


const MazeBox = styled.div`
	display: flex;
    align-items: center;
	justify-content: center;
	min-width: 740px;
	min-height: 740px;
	background-color: #000;
	border-radius: 40px;
`;

let maze = getMaze(SIZE_OF_SIDE);
let units = getUnits(maze);
let character = getCharacter(maze, units);

const MazePageContainer = ({ className }) => {


	const [mazeLayer, setMazeLayer] = useState([]);
	const [unitsLayer, setUnitsLayer] = useState([]);
	const [characterLayer, setCharacterLayer] = useState([]);
	const [isRebooted, setIsRebooted] = useState(false);
	const [level, setLevel] = useState(1);

	let startPointY;
	let startPointX;
	for (let y = 0; y < characterLayer.length; y++) {
		for (let x = 0; x < characterLayer[y].length; x++) {
			if (characterLayer[y][x] === 6) {
				startPointY = y;
				startPointX = x;
			}
		}
	}

	useEffect(() => {
		setMazeLayer(maze);
		setUnitsLayer(units);
		setCharacterLayer(character);
	}, []);

	useEffect(() => {
		const onKeypress = (e) => {
			let newCharacterLayer = characterLayer.slice();
			// eslint-disable-next-line default-case
			switch (e.code) {
				case 'KeyA':
					if (characterLayer[startPointY - 1][startPointX] !== 0) {
						return;
					}

					if (unitsLayer[startPointY - 1][startPointX] === 5) {

						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY - 1][startPointX] = 6;

					setTimeout(() => setIsRebooted(!isRebooted), 500);
						setLevel(level+1);
						console.log(level);
					}

					if (characterLayer[startPointY - 1][startPointX] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY - 1][startPointX] = 6;
					}
					setTimeout(() => setCharacterLayer(newCharacterLayer), 50);

					break;
				case 'KeyD': ///////////////////////////////////////////////////////////////////////D
					if (characterLayer[startPointY + 1][startPointX] !== 0) {
						return;
					}

					if (unitsLayer[startPointY + 1][startPointX] === 5) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY + 1][startPointX] = 6;

						setTimeout(() => setIsRebooted(!isRebooted), 500);
						setLevel(level+1);
						console.log(level);
					}

					if (characterLayer[startPointY + 1][startPointX] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY + 1][startPointX] = 6;
					}
					setTimeout(() => setCharacterLayer(newCharacterLayer), 50);

					break;
				case 'KeyW': /////////////////////////////////////////////////////////////////////////////W
					if (characterLayer[startPointY][startPointX - 1] !== 0) {
						return;
					}

					if (unitsLayer[startPointY][startPointX - 1] === 5) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY][startPointX - 1] = 6;

						setTimeout(() => setIsRebooted(!isRebooted), 500);
						setLevel(level+1);
						console.log(level);
					}

					if (characterLayer[startPointY][startPointX - 1] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY][startPointX - 1] = 6;
					}
					setTimeout(() => setCharacterLayer(newCharacterLayer), 50);

					break;
				case 'KeyS': ///////////////////////////////////////////////////////////////////////////////S
					if (characterLayer[startPointY][startPointX + 1] !== 0) {
						return;
					}

					if (unitsLayer[startPointY][startPointX + 1] === 5) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY][startPointX + 1] = 6;

						setTimeout(() => setIsRebooted(!isRebooted), 500);
						setLevel(level+1);
						console.log(level);
					}

					if (characterLayer[startPointY][startPointX + 1] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY][startPointX + 1] = 6;
					}
					setTimeout(() => setCharacterLayer(newCharacterLayer), 50);

					break;
			}

		};

		document.addEventListener('keypress', onKeypress);

		return () => {
			document.removeEventListener('keypress', onKeypress);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [characterLayer, startPointY, startPointX]);

	useEffect(() => {
		if (isRebooted) {
			let maze2 = getMaze(SIZE_OF_SIDE);
			let units2 = getUnits(maze2);
			let character2 = getCharacter(maze2, units2);
			setMazeLayer(maze2);
			setUnitsLayer(units2);
			setCharacterLayer(character2);
			setIsRebooted(!isRebooted);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRebooted]);

	return (
		<div className={className}>
			<MazeBox>
			<Maze
				mazeLayer={mazeLayer}
				unitsLayer={unitsLayer}
				characterLayer={characterLayer}
			/>
			</MazeBox>
		</div>
	);
};

export const MazePage = styled(MazePageContainer)`
	display: flex;
	justify-content: space-around;
	align-items: center;

`;
