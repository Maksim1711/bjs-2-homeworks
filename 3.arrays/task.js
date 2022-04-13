function compareArrays(arr1, arr2) {
	let result;

	// Ваш код
	compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item) => item === arr2[item]);
	result = (arr1.every((item) => item !== arr2[item]));
	return result; // boolean
};

function advancedFilter(arr) {
	let resultArr;

	// Ваш код
	resultArr = arr.filter((item) => item > -1).filter((item) => item % 3 === 0).map((item) => item * 10);
	return resultArr; // array
};
