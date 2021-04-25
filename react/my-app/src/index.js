import React from 'react';
import ReactDom from 'react-dom';
import { books } from './books';
import Book from './Book';

//CSS
import './index.css';

const bookList = books.map(book => {
  return (
    <Book
      key={book.title}
      book={book}
    />
  )
});

console.log(bookList)
function BookList() {
  return (
    <section className="booklist">{bookList}</section>

  )
}


ReactDom.render(<BookList />, document.getElementById('root'));