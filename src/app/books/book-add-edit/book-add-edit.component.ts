import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/classes/custom.validators';
import { BookStateService } from '../book-state.service';
import { Book } from '../models/book';
import { IBookDto } from '../models/book-dto';
import { StatusDependantFormComponent } from '../status-dependant-form/status-dependant-form.component';

@Component({
  templateUrl: './book-add-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookAddEditComponent implements OnInit {

  form!: FormGroup;
  book!: Book;

  private _statusDependantFormComponent!: StatusDependantFormComponent;
  @ViewChild(StatusDependantFormComponent) set statusDependantFormComponent(statusDependantFormComponent: StatusDependantFormComponent) {
    if (statusDependantFormComponent && statusDependantFormComponent.form) {
      this._statusDependantFormComponent = statusDependantFormComponent;
      this.form.addControl('statusDependantForm', this._statusDependantFormComponent.form);
    }
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    private _bookStateService: BookStateService) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      data.book$.subscribe((book: Book) => {
        this.book = book;
        this._initBookAddForm();
        this._changeDetectorRef.detectChanges();
      });
    });
  }

  private _initBookAddForm(): void {
    this.form = this._formBuilder.group({
      id: [this.book.id],
      title: [this.book.title, [Validators.required, CustomValidators.notEmpty, Validators.maxLength(100)]],
      author: [this.book.author, [Validators.required, CustomValidators.notEmpty, Validators.maxLength(50)]],
      description: [this.book.description, [Validators.maxLength(5000)]],
      numberOfPages: [this.book.numberOfPages, [Validators.required, Validators.max(10000)]],
      image: [this.book.image],
      genres: [this.book.genres],
    });
  }

  saveBook(): void {
    const bookNew: IBookDto = {
      ...this.form.value,
      ...this._statusDependantFormComponent.value
    };

    this._bookStateService.saveBook(bookNew).subscribe(() => {
      this._router.navigateByUrl('/', {state: { bypassGuard: true}});
    });
  }
}


