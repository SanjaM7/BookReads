import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'src/app/shared/components/errors/classes/custom.validators';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { Rating } from 'src/app/shared/models/rating';
import { BookService } from '../book.service';
import { Book } from '../models/book';
import { BookNew } from '../models/book-new';
import { BookStatus } from '../models/book-status';

@Component({
  selector: 'sm-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookAddComponent {
  form: FormGroup;
  BookStatus = BookStatus;
  Rating = Rating;
  maxDate = new Date();
  book: Book = new Book('0', null, '', '', Rating.NullInstance, null, '', '', '', '', null, []);
  @ViewChild(RatingComponent) ratingComponent!: RatingComponent;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private bookService: BookService) {
      this.form = this._initBookAddForm();
      this._manageControls();
      this.form.valueChanges.subscribe(value => console.log(value));
      this.route.params.subscribe(
        params => {
            this._onBookIdChange(params.id);
        }
    );
    }

  private _onBookIdChange(bookId: string): void {
    if (!bookId || bookId === '0') {
      this.book = new Book('0', null, '', '', Rating.NullInstance, null, '', '', '', '', null, []);
      this._updateForm(this.book);
      return;
    }

    this.bookService.getBook(bookId).subscribe(book => {
      this.book = book;
      this._updateForm(book);
    });
  }

  private _initBookAddForm(): FormGroup {
    return this.formBuilder.group({
      id: [this.book.id],
      title: [this.book.title, [Validators.required, CustomValidators.notEmpty, Validators.minLength(1), Validators.maxLength(100)]],
      author: [this.book.author, [Validators.required, CustomValidators.notEmpty, Validators.minLength(1), Validators.maxLength(50)]],
      description: [this.book.description, [CustomValidators.notEmpty, Validators.maxLength(500)]],
      status: [this.book.status, Validators.required],
      numberOfPages: [this.book.numberOfPages, Validators.required],
      published: [this.book.published, Validators.required],
      image: [this.book.image],
      genres: [this.book.genres]
    });
  }

  private _manageControls(): void {
    this.form.controls.status.valueChanges.subscribe(status => {
      switch (status) {
        case BookStatus.ToRead: {
          this.form.removeControl('rating');
          this.form.removeControl('started');
          this.form.removeControl('read');
          break;
        }
        case BookStatus.CurrentlyReading: {
          this.form.addControl('started', this.formBuilder.control(this.book.started, Validators.required));
          this.form.removeControl('rating');
          this.form.removeControl('read');
          break;
        }
        case BookStatus.Read: {
          this.form.addControl('rating', this.formBuilder.control(this.book.rating, Validators.required));
          this.form.addControl('started', this.formBuilder.control(this.book.started, Validators.required));
          this.form.addControl('read', this.formBuilder.control(this.book.read, Validators.required));
          break;
        }
        default: {
          break;
        }
     }
    });
  }

  _updateForm(book: Book): void {
    if (!book.id || book.id === '0') {
      this.form.removeControl('rating');
      this.form.removeControl('started');
      this.form.removeControl('read');
    }

    const bookNew = new BookNew(
      book.id, book.image, book.title, book.author, book.status, book.description, book.published, book.numberOfPages, book.genres
      );
    this.form.setValue(bookNew);
  }



  addBook(): void {
    console.log(this.form);
    console.log('Saved: ' + JSON.stringify(this.form.value));
  }
}
