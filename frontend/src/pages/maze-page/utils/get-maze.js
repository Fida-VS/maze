import { SIZE_OF_SIDE } from "../../../constants";
import { getRandomItem } from "./get-random-item";



 export const getMaze = (size) => {
	let matrix = new Array(size).fill().map(() => new Array(size).fill(1));

	let oddArray = getOddArray(SIZE_OF_SIDE);

let index1 = getRandomItem(oddArray);
let index2 = getRandomItem(oddArray);

	let TRACKTOR = {
		x: index2,
		y: index1,
	};

	matrix[TRACKTOR.y][TRACKTOR.x] = 0;

	while (!isValidMaze(matrix)) {
		moveTracktor(matrix, TRACKTOR);
	}

	return matrix;
};


function isValidMaze(array) {
	for (let y = 1; y < SIZE_OF_SIDE - 1; y += 2) {
		for (let x = 1; x < SIZE_OF_SIDE - 1; x += 2) {
			if (array[y][x] === 1) {
				return false;
			}
		}
	}
	return true;
}

function moveTracktor(array, tracktor) {
	const directions = [];

	if (tracktor.x > 1) {
		directions.push([-2, 0]);
	}

	if (tracktor.x < SIZE_OF_SIDE - 2) {
		directions.push([2, 0]);
	}

	if (tracktor.y > 1) {
		directions.push([0, -2]);
	}

	if (tracktor.y < SIZE_OF_SIDE - 2) {
		directions.push([0, 2]);
	}

	const [dx, dy] = getRandomItem(directions);

	tracktor.x += dx;
	tracktor.y += dy;

	if (array[tracktor.y][tracktor.x] !== 0) {
		array[tracktor.y][tracktor.x] = 0;
		array[tracktor.y - dy / 2][tracktor.x - dx / 2] = 0;
	}
}

function getOddArray(sizeOfMaze) {
	return [...Array(sizeOfMaze).keys()].filter((i) => i % 2 !== 0);
}










