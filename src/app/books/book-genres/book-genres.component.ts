import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const MatChipsProvider = {
  provide: MAT_CHIPS_DEFAULT_OPTIONS,
  useValue: {
    separatorKeyCodes: [ENTER, COMMA]
  }
};

@Component({
  selector: 'sm-book-genres',
  templateUrl: './book-genres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    MatChipsProvider,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BookGenresComponent,
      multi: true
    }
  ]
})
export class BookGenresComponent implements OnInit, ControlValueAccessor {

  form!: FormGroup;
  genres: string[] = [];
  definedGenres: string[] = ['science', 'self-help', 'personal-development', 'history', 'business', 'autobiography'];
  filteredGenres: Observable<string[]> = of();

  onChange!: (value: string[]) => {};

  constructor(
    private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef
    ) {}

  writeValue(value: string[]): void {
    this.genres = value;
    this._changeDetectorRef.detectChanges();
  }
  registerOnChange(fn: (value: string[]) => {}): void { this.onChange = fn; }
  registerOnTouched(): void {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      genreControl: ['']
    });

    this.filteredGenres = this.form.controls.genreControl.valueChanges.pipe(
      startWith(null),
      map(value => this._filter(value, this.genres, this.definedGenres))
    );
  }

  private _filter(value: string | null, genres: string[], definedGenres: string[]): string[] {
    const filteredExistingGenres = definedGenres.filter(val => !genres.includes(val));
    if (!value) {
      return filteredExistingGenres;
    }

    const filterValue = value.toLowerCase();
    return filteredExistingGenres.filter(genre => genre.toLowerCase().indexOf(filterValue) === 0);
  }

  addGenre(event: MatChipInputEvent): void {
    const input = event.input;
    const genre = (event.value || '').trim();

    if (genre && !this.genres.includes(genre)) {
      this.genres.push(genre);
    }

    this._resetInput(input);
  }

  removeGenre(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
    }
  }

  genreSelected(event: MatAutocompleteSelectedEvent, input: HTMLInputElement): void {
    this.genres.push(event.option.viewValue);
    this._resetInput(input);
  }

  private _resetInput(input: HTMLInputElement): void {
    input.value = '';
    this.form.controls.genreControl.setValue(null);
  }
}
