import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BOOKS } from './books-data.service';
import { Book } from './models/book';
import { IBookDto } from './models/book-dto';
@Injectable()

export class BookService {
    private booksUrl = 'api/books';

    constructor(
        private http: HttpClient,
        ) { }

    getBooks(): Observable<IBookDto[]> {
        return this.http.get<IBookDto[]>(this.booksUrl);
    }

    getBook(id: string): Observable<IBookDto> {
        return this.http.get<IBookDto>(this.booksUrl + `/${id}`);
    }

    addBook(book: IBookDto): Observable<IBookDto> {
        book.id = +BOOKS[BOOKS.length - 1].id + 1;
        const url = `${this.booksUrl}/${book.id}`;
        return this.http.post<IBookDto>(this.booksUrl, book);
    }

    editBook(book: IBookDto): Observable<IBookDto> {
        const url = `${this.booksUrl}/${book.id}`;
        return this.http.put<IBookDto>(url, book);
    }

    deleteBook(book: Book): Observable<IBookDto> {
        const url = `${this.booksUrl}/${book.id}`;
        return this.http.get<IBookDto>(url);
    }
}
