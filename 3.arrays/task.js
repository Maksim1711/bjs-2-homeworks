function compareArrays(arr1, arr2) {
	let result;

	// Ваш код
	return result = arr1.every((elem, idx) => arr2[idx] === elem && arr1.length === arr2.length);
	// boolean
};

function advancedFilter(arr) {
	let resultArr;

	// Ваш код
	return resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);;
	// array
};
