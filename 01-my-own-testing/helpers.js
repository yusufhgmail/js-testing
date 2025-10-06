function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArr(length) {
	let arr = [];

	let i = 1;
	while (i <= length) {
		arr.push(randomNum(10, -10));
		i++;
	}
	return arr;
}
