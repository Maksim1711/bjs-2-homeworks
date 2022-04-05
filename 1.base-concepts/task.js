function solveEquation(a, b, c) {
	let arr;
	// код для задачи №1 писать здесь
	"use strict";
	arr = {};
	let discriminant = [b ** 2 - 4 * a * c];
	if (discriminant < 0)
		return [];
	if (discriminant > 0) {
		let root = [];
		root.push((-b + Math.sqrt(discriminant)) / (2 * a));
		root.push((-b - Math.sqrt(discriminant)) / (2 * a));
		arr = root;
	} else if (discriminant == 0)
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a)];
	return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	// код для задачи №2 писать здесь

	return totalAmount;
}
