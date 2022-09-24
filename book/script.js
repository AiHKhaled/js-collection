let myLibrary = [];

var titleInput = document.getElementById("title");
var authorInput = document.getElementById("author");
var pagesInput = document.getElementById("pages");
var show = document.getElementById("display");

class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }
  removeBook(title) {
    this.books = this.books.filter((book) => {
      book.title !== title;
    });
  }
  editBook() {}
  getBook(title) {
    return this.books.find((book) => {
      book.title === title;
    });
  }
  isInLibrary(title) {
    return this.books.some((book) => newBook.title === book.title);
  }
}

const library = new Library();

const addBook = () => {
  let book = {
    //key: Date.now(),
    title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value,
  };

  myLibrary.push(book);
  document.forms[0].reset();

  show.innerText = "\n" + JSON.stringify(myLibrary, 2);
  console.log({ myLibrary });
  localStorage.setItem("my library", JSON.stringify(myLibrary));
};

const allbooks = () => {
  myLibrary.map((index) => {
    index.title;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault;
    addBook();
  });
});
