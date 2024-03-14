

export function getCharacter(array, array2){
	let characterLayer = [];

	for (let y = 0; y < array.length; y++) {
		let row = [];

		for (let x = 0; x < array[y].length; x++) {
			row.push(null);
		}

		characterLayer.push(row);
	}

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[y].length; x++) {
			if (array[y][x] === 1) {
				characterLayer[y][x] = 1;
			} else if(array[y][x] === 0){
				characterLayer[y][x] = 0;
			}
		}
	}

	for (let y = 0; y < array2.length; y++) {
		for (let x = 0; x < array2[y].length; x++) {
			if (array2[y][x] === 4) {
				characterLayer[y][x] = 6;
			}
		}
	}


	return characterLayer;
}




 