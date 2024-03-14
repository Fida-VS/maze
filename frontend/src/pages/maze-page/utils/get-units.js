import { getRandomItem } from "./get-random-item";

export const getUnits = (array) => {
	let deadLocks = getAllDeadLocks(array);

	let deadLocksList = [];

	for (let y = 0; y < deadLocks.length; y++) {
		for (let x = 0; x < deadLocks[y].length; x++) {
			if(deadLocks[y][x] === 3){
				deadLocksList.push([y,x]);
			}
		}
	}

	let enter = getRandomItem(deadLocksList);
	let exit = getRandomItem(deadLocksList);

	while(enter === exit){
		exit = getRandomItem(deadLocksList);
	}


	deadLocks[enter[0]][enter[1]] = 4;
	deadLocks[exit[0]][exit[1]] = 5;

	return deadLocks;
}

function getAllDeadLocks(array) {
	let result = [];

	for (let y = 0; y < array.length; y++) {
		const row = [];

		for (let x = 0; x < array[y].length; x++) {
			row.push(null);
		}

		result.push(row);
	}

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[y].length; x++) {
			if (array[y][x] === 1) {
				result[y][x] = 1;
			}
		}
	}

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[y].length; x++) {
			if (result[y][x] === 1) {
				continue;
			}
			if (
				result[y - 1][x] +
				result[y][x + 1] +
				result[y + 1][x] +
				result[y][x - 1] ===
				3
			) {
				result[y][x] = 3;
			}
		}
	}

	return result;
}






