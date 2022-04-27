class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}

}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	type = "novel";
}
class FantasticBook extends Book {
	type = "fantastic";
}
class DetectiveBook extends Book {
	type = "detective";
}
class Library {
	constructor(name = "", books = []) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let searchBook = this.books.find((item) => item[type] === value);
		if (searchBook === undefined) {
			searchBook = null;
		}
		return searchBook;
	}

	giveBookByName(bookName) {
		let getBook = this.books.findIndex((item) => item.name === bookName);
		if (getBook != -1) {
			let bookToReturn = this.books[getBook];
			this.books.splice([getBook], [1]);
			return bookToReturn;
		} else {
			return null;
		}
	}
}

