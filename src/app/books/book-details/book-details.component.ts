import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'sm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book> = of();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) {}

  ngOnInit(): void {
    this._getBookId();
  }

  private _getBookId(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (!bookId) {
      return;
    }

    this.getBook(bookId);
  }

  getBook(id: string): void {
    this.book$ = this.bookService.getBook(id);
  }
}
