import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:8080/view/'+ id);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>('http://localhost:8080/edit/' + id, book)
  }

  deleteBook(id: number):Observable<Book> {
    return this.http.delete<Book>('http://localhost:8080/delete/ ' + id);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:8080//create', book);
  }

}
