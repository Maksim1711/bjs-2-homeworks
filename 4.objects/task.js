function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	// Ваш код
}
let student1 = new Student("Mark", "male", 32);
let student2 = new Student("Masha", "female", 30);

Student.prototype.setSubject = function (subjectName) {
	//ваш код
	this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [mark];
	}
	else {
		this.marks.push(mark);
	}
}

Student.prototype.addMarks = function (...rest) {
	if (this.marks === undefined) {
		this.marks = [...rest];
	}
	else {
		this.marks.push(...rest);
	}
}

Student.prototype.getAverage = function () {
	return this.marks.reduce(function (sum, grade) {
		return sum + grade;
	}, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
// ваш код для остальных методов