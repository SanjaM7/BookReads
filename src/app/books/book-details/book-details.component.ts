import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DeleteData } from 'src/app/shared/components/delete/delete-data';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { BookStateService } from '../book-state.service';
import { Book } from '../models/book';

@Component({
  templateUrl: './book-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book> = of();

  constructor(
    private _route: ActivatedRoute,
    private _dialog: MatDialog,
    private _bookStateService: BookStateService,
    private _router: Router) {}

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.book$ = data.book$;
    });
  }

  openDeleteDialog(book: Book): void {
    const dialogRef = this._dialog.open(DeleteComponent, {
      width: '500px',
      data: new DeleteData('book', 'book name', book.title)
    });

    dialogRef.afterClosed().subscribe((deletedClicked) => {
      if (!deletedClicked) {
        return;
      }

      this._bookStateService.deleteBook(book);
      this._router.navigateByUrl('/');
    });
  }
}
