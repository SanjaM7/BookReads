import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookService } from '../book.service';
import { BookListItem } from '../models/book-list-item';
import { BookStatus } from '../models/book-status';

@Component({
  selector: 'sm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {

  columns = ['id', 'image', 'title', 'author', 'rating', 'status', 'started', 'read', 'actions'];
  columnsFriendlyNames = ['Id', 'Show Image', 'Title', 'Author', 'Rating', 'Status', 'Started', 'Read', 'Actions'];
  BookStatus = BookStatus;
  books$: Observable<BookListItem[]> = of();
  showImage = false;
  selectedBookStatus!: BookStatus | BookStatus[];

  constructor(private booksService: BookService) {}

  ngOnInit(): void {
    this.getBooks(BookStatus.All);
  }

  getBooks(status: BookStatus | BookStatus[]): void {
    this.selectedBookStatus = status;
    this.books$ = this.booksService.getBooks(status);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}


