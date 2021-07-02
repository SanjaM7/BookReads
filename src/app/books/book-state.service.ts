import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from '../shared/services/notification.service';
import { BookService } from './book.service';
import { BOOKS } from './books-data.service';
import { Book } from './models/book';
import { IBookDto } from './models/book-dto';
import { BookListItem } from './models/book-list-item';
import { BookStatus } from './models/book-status';

@Injectable({providedIn: 'root'})
export class BookStateService {
    showImage = false;

    public _books: Book[] = [];

    constructor(
        private bookService: BookService,
        private notificationService: NotificationService) {
    }

    getBooks(status: BookStatus | BookStatus[]): Observable<BookListItem[]> {
        if (this._booksExists()) {
            const adaptedBooks = this._books.map(BookListItem.FromBook);
            return of(this._filterBooks(adaptedBooks, status));
        }

        return this.bookService.getBooks().pipe(
            map(booksDto => {
                this._setBooks(booksDto);
                const adaptedBooks = booksDto.map(BookListItem.FromBookDto);
                return this._filterBooks(adaptedBooks, status);
            }),
            catchError((error) => this.notificationService.displayFail('Failed to load books. Try again later.', error))
        );
    }

    getBook(bookId: string): Observable<Book> {
        const book = this._findBook(bookId);
        if (book) {
            return of(book);
        }

        return this.bookService.getBook(bookId).pipe(
            map(Book.FromBookDto),
            catchError((error) => this.notificationService.displayFail('Failed to load a book. Try again later.', error))
        );
    }

    saveBook(book: IBookDto): Observable<Book> {
        if (book.id !== '0') {
            return this._editBook(book);
        }

        return this._addBook(book);
    }

    deleteBook(book: Book): Observable<boolean> {
        if (parseInt(book.id, 10) >= BOOKS.length) {
            return of(this._deleteBook(book.id));
        }

        return this.bookService.deleteBook(book).pipe(
            map((bookDto) => {
                return this._deleteBook(book.id);
            }),
            catchError((error) => this.notificationService.displayFail('Failed to delete a book. Try again later.', error))
        );
    }

    private _deleteBook(id: string): boolean {
        const foundIndex = this._books.findIndex(_book => _book.id === id);
        if (foundIndex > -1) {
            this._books.splice(foundIndex, 1);
            this.notificationService.displaySuccess('Book successfully deleted');
            return true;
        }
        this.notificationService.displayFail('Failed to delete a book. Try again later.');
        return false;
    }

    private _addBook(book: IBookDto): Observable<Book> {
        return this.bookService.addBook(book).pipe(
            map(() => {
                const adaptedBook = Book.FromBookDto(book);
                this._books.push(adaptedBook);
                this.notificationService.displaySuccess('Book successfully added');
                return adaptedBook;
            }),
            catchError((error) => this.notificationService.displayFail('Fail to add a book. Please try again later.', error))
        );
    }

    private _editBook(book: IBookDto): Observable<Book> {
        return this.bookService.editBook(book).pipe(
            map(() => {
                const adaptedBook = Book.FromBookDto(book);
                const foundIndex = this._books.findIndex(_book => _book.id === book.id);
                this._books[foundIndex] = adaptedBook;
                this.notificationService.displaySuccess('Book successfully editted');
                return adaptedBook;
            }),
            catchError((error) => this.notificationService.displayFail('Fail to edit a book. Please try again later.', error))
        );
    }

    private _booksExists(): boolean {
        return !!(this._books && this._books.length);
    }

    private _setBooks(booksDto: IBookDto[]): void {
        this._books = booksDto.map(bookDto => Book.FromBookDto(bookDto));
    }

    private _filterBooks(books: BookListItem[], status: BookStatus | BookStatus[]): BookListItem[] {
        if (status && status !== BookStatus.All) {
            const filteredBooks = books.filter(book => book.status === status);
            return filteredBooks;
        } else {
            return books;
        }
    }

    private _findBook(bookId: string): Book | null {
        return this._books.find(book => book.id === bookId) || null;
    }
}
