import { QueryList, TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import { ErrorDefDirective } from './directives/error-def.directive';
import { ErrorFactory } from './models/error-factory';
import { ValidationError } from './models/error-messages';
export class ErrorsService {

  private _error$ = new BehaviorSubject<ValidationError | null>(null);
  error$ = this._error$.asObservable();

  constructor(
    private readonly control: AbstractControl,
    private readonly controlName: string,
    private readonly customErrors: QueryList<ErrorDefDirective>,
    private readonly errorFactory: ErrorFactory,
    private readonly defaultErrorTemplate: TemplateRef<any>) {
    this.initDisplayErrorMessage();
  }

  private initDisplayErrorMessage(): void {
    this.control.statusChanges
      .pipe(
        startWith(this.control.status),
        map(() => this._getFirstErrorKey()),
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      )
      .pipe(filter(key => !!key))
      .subscribe((key) => {
        this._displayMessage(Object.keys(key)[0]!);
      });
  }

  private _getFirstErrorKey(): any {
    if (this.control.status !== 'INVALID') {
      return null;
    }

    if (!this.control.errors) {
      return null;
    }

    const firstKey = Object.keys(this.control.errors)[0];
    const firstValue = Object.values(this.control.errors)[0];
    const object = {
      [firstKey]: firstValue
    };
    return object;
  }

  private _displayMessage(key: string): void {
    const error = this.errorFactory.createError(key, this.control, this.controlName, this.defaultErrorTemplate, this.customErrors);
    this._error$.next(error);
  }
}
