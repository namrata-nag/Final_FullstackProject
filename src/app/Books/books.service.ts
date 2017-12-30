import {Injectable} from '@angular/core';
import {bookStore} from './bookstore'


@Injectable()
export class BookService extends bookStore{

    constructor(){
        super();
        this.data();
       
    }
    getBookCount(){
        let books=JSON.parse(localStorage.getItem('books'));
        return books.length;
    }
    getBook(){
        let books=JSON.parse(localStorage.getItem('books'));
       
        return books;
    }
    addBook(newBook:any){
        let books = JSON.parse(localStorage.getItem('books'));
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    }

    

    deleteBook(id: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    for (let i = 0; i < books.length; i++) {
      if (books[i].ISBN == id) {
        books.splice(i, 1);
      }
    }
  localStorage.setItem('books', JSON.stringify(books));
}

getBooks(id: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    let book:any = null;
    for (let i = 0; i <books.length; i++) {
      if (books[i].ISBN == id) {
        book =books[i];
        break;
      }
    }
    return book;
  }

  updateBook(book: any) {
    let books= JSON.parse(localStorage.getItem('books'));
    for (let i = 0; i < books.length; i++) {
      if (books[i].ISBN == book.ISBN) {
        books[i] = book;
      }
    }
    localStorage.setItem('books', JSON.stringify(books));
  }

 
  }
  