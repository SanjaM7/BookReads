import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteData } from 'src/app/shared/components/delete/delete-data';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { BookStateService } from '../book-state.service';
import { Book } from '../models/book';
import { BookListItem } from '../models/book-list-item';
import { BookStatus } from '../models/book-status';
@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {

  columns = ['id', 'image', 'title', 'author', 'rating', 'status', 'started', 'read', 'actions'];
  columnsFriendlyNames = ['Id', 'Show Image', 'Title', 'Author', 'Rating', 'Status', 'Started', 'Read', 'Actions'];
  BookStatus = BookStatus;
  booksDataSource = new MatTableDataSource<BookListItem>();
  selectedBookStatus: BookStatus | BookStatus[] = BookStatus.All;

  constructor(
    private _bookStateService: BookStateService,
    private _dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef) { }

  get showImage(): boolean {
    return this._bookStateService.showImage;
  }

  set showImage(value: boolean) {
    this._bookStateService.showImage = value;
  }

  ngOnInit(): void {
    this.getBooks(BookStatus.All);
  }

  getBooks(status: BookStatus | BookStatus[]): void {
    this.selectedBookStatus = status;
    this._bookStateService.getBooks(status)
      .subscribe(books => {
        this.booksDataSource.data = books;
        this._changeDetectorRef.detectChanges();
    });
  }

  openDeleteDialog($event: MouseEvent, book: Book): void {
    $event.stopPropagation();
    const dialogRef = this._dialog.open(DeleteComponent, {
      width: '500px',
      data: new DeleteData('book', 'book name', book.title)
    });

    dialogRef.afterClosed().subscribe((deletedClicked) => {
      if (!deletedClicked) {
        return;
      }

      this._bookStateService.deleteBook(book).subscribe(
        (deleted) => {
          if (!deleted) {
            return;
          }

          this.getBooks(this.selectedBookStatus);
        }
      );
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}


