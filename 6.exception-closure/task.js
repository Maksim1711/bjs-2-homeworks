function parseCount(value) {
	let number = Number.parseInt(value)
	if (number) {
		return number;
	} else {
		throw new Error("Невалидное значение");
	}
};

function validateCount(value) {
	try {
		let number = parseCount(value)
		return number;
	} catch (error) {
		return error;
	}
};
class Triangle {
	constructor(a, b, c) {
		if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.left = a;
		this.right = b;
		this.lower = c;
	}

	getPerimeter() {
		return this.left + this.right + this.lower;
	}

	getArea() {
		const square = 0.5 * this.getPerimeter();
		return parseFloat(Math.sqrt(square * (square - this.left) * (square - this.right) * (square - this.lower)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}
	catch (error) {
		const triangleObject = new Object();
		triangleObject.getArea = () => {
			return "Ошибка! Треугольник не существует";
		};
		triangleObject.getPerimeter = () => {
			return "Ошибка! Треугольник не существует";
		};
		return triangleObject;
	}
};