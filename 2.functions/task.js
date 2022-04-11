// Задание 1
"use strict"
function getArrayParams(arr) {
	let min, max, sum, avg;
	// Ваш код
	min = Infinity;
	max = -Infinity;
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	avg = Number((sum / arr.length).toFixed(2));
	return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
	let sum;
	// Ваш код
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function makeWork(arrOfArr, func) {
	let max;
	max = 0;
	// Ваш кода
	for (let i = 0; i < arrOfArr.length; i++) {
		let sum = func(arrOfArr[i]);
		if (sum > max)
			max = sum;
	}
	return max;
}

// Задание 3
function worker2(arr) {
	// Ваш код
	let min = Infinity;
	let max = -Infinity;
	Math.abs(max);
	Math.abs(min);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max)
			max = arr[i];
		if (arr[i] < min)
			min = arr[i];
	}
	return max - min;
}
