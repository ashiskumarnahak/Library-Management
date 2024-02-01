import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  url = "http://localhost:3000/books/";
  addBook = "http://localhost:3000/books/";
  private deleteBookUrl = "http://localhost:3000/books/";
  private updateBookUrl = "http://localhost:3000/books/";



  constructor(private httpClient: HttpClient) { }

  extBook: any;

  getBooks() {
    return this.httpClient.get(this.url);
  }
  getBooksById(id: number): Observable<Books> {
    return this.httpClient.get<Books>(this.url + id);
  }

  createBook(book: Books) {
    return this.httpClient.post(this.addBook, book);
  }
  update(books: Books): Observable<Object> {
    return this.httpClient.put(this.updateBookUrl + books.id, books);
  }

  DeleteBook(id: number): Observable<Object> {
    return this.httpClient.delete(this.deleteBookUrl + id);
  }
}
