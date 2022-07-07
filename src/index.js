const { randomInt } = require('node:crypto');

function isSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = randomInt(i);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function quantumSort(arr) {
	// No need to sort if the array is already sorted
	if (arr.length < 2) {
		return arr;
	}
	if (isSorted(arr)) {
		return arr;
	}

	// Shuffle the array
	const shuffled = shuffle(arr);

	// Check if the array is sorted
	if (isSorted(shuffled)) {
		return shuffled;
	}

	// The array is not sorted, destroy the universe (exit the program)
	process.abort();
}

exports = module.exports = quantumSort;