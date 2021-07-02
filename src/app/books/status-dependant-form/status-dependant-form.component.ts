import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/classes/custom.validators';
import { Rating } from 'src/app/shared/models/rating';
import { Book } from '../models/book';
import { BookStatus } from '../models/book-status';

@Component({
  selector: 'sm-status-dependant-form',
  templateUrl: './status-dependant-form.component.html',
  styleUrls: ['./status-dependant-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusDependantFormComponent implements OnInit {

  form!: FormGroup;
  BookStatus = BookStatus;
  Rating = Rating;
  maxDate = new Date();
  private _book!: Book;
  @Input() set book(book: Book) {
    this._book = book;
    this._initBookStatusDependantForm();
  }

  get value(): any {
    return {
      status: this.form.controls.status.value,
      published: this.datesGroup.controls.published.value.toISOString(),
      started: this.datesGroup.controls.started?.value ? this.datesGroup.controls.started.value.toISOString() : null,
      read: this.datesGroup.controls.read?.value ? this.datesGroup.controls.read.value.toISOString() : null,
      rating: this.form.controls.rating?.value ? this.form.controls.rating?.value : null
    };
  }

  get datesGroup(): FormGroup {
    return this.form.controls.datesGroup as FormGroup;
  }

  constructor(
    private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._initBookStatusDependantForm();
  }

  private _initBookStatusDependantForm(): void {
    this.form = this._formBuilder.group({
      status: [this._book.status?.value, Validators.required],
      datesGroup: this._formBuilder.group({
        published: [this._book.published, Validators.required],
      },
      { validator: CustomValidators.dateOrder} as AbstractControlOptions
      ),
    });

    this._manageControls(this.form.controls.status.value);
    this._subscribeToBookStatusChange();
  }

  private _subscribeToBookStatusChange(): void {
    this.form.controls.status.valueChanges.subscribe(status => {
      this._manageControls(status);
      this.form.updateValueAndValidity();
    });
  }

  private _manageControls(status: string): void {
    switch (status) {
      case BookStatus.ToRead.value: {
        this._removeRatingControl();
        this._removeStartedControl();
        this._removeReadControl();
        break;
      }
      case BookStatus.CurrentlyReading.value: {
        this._addStartedControl();
        this._removeRatingControl();
        this._removeReadControl();
        break;
      }
      case BookStatus.Read.value: {
        this._addRatingControl();
        this._addStartedControl();
        this._addReadControl();
        break;
      }
      default: {
        break;
      }
    }
  }

  private _addRatingControl(): void {
    this.form.addControl('rating', this._formBuilder.control(this._book.rating.value, Validators.required), { emitEvent: false });
  }

  private _addStartedControl(): void {
    this.datesGroup.addControl('started', this._formBuilder.control(this._book.started, Validators.required), { emitEvent: false });
  }

  private _addReadControl(): void {
    this.datesGroup.addControl('read', this._formBuilder.control(this._book.read, Validators.required), { emitEvent: false });
  }

  private _removeRatingControl(): void {
    this.form.removeControl('rating');
  }

  private _removeStartedControl(): void {
    this.datesGroup.removeControl('started');
  }

  private _removeReadControl(): void {
    this.datesGroup.removeControl('read');
  }
}
