import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book, BookAdapter, IBookDto } from './models/book';
import { BookListItem, BookListItemAdapter } from './models/book-list-item';
import { BookStatus } from './models/book-status';

@Injectable()

export class BookService {
    private booksUrl = 'api/books';


    constructor(
        private http: HttpClient,
        private bookListItemAdapter: BookListItemAdapter,
        private bookAdapter: BookAdapter
        ) { }

    getBooks(status: BookStatus | BookStatus[]): Observable<BookListItem[]> {
        return this.http.get<IBookDto[]>(this.booksUrl)
            .pipe(map(books => {
                let adaptedBooks = books.map(item => this.bookListItemAdapter.adapt({ data: item }));
                if(status == BookStatus.All) {
                    return adaptedBooks;
                } else {
                    return adaptedBooks.filter(book => book.status === status);
                }

            }));
    }

    getBook(id: string): Observable<Book> {
        return this.http.get<IBookDto>(this.booksUrl + `/${id}`)
            .pipe(map((item: IBookDto) => this.bookAdapter.adapt({ data: item })));
    }

    // addBook(product: IBookListItemDto): Observable<IBookListItemDto> {
    //     product.id = null;
    //     return this.http.post<IBookListItemDto>(this.booksUrl, product);
    // }
}
