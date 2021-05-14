import { QueryList, TemplateRef } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged, filter, map, startWith } from "rxjs/operators";
import { SbErrorDefDirective } from "./directives/sb-error-def.directive";
import { ErrorFactory } from "./models/error-factory";
import { ValidationError } from "./models/error-messages";

export class ErrorsService {

  private _error$ = new BehaviorSubject<ValidationError>(null);
  error$ = this._error$.asObservable();

  constructor(
    private readonly control: AbstractControl,
    private readonly controlName: string,
    private readonly customErrors: QueryList<SbErrorDefDirective>,
    private readonly errorFactory: ErrorFactory,
    private readonly defaultErrorTemplate: TemplateRef<any>) {
    this.initDisplayErrorMessage();
  }

  private initDisplayErrorMessage(): void {
    this.control.statusChanges
      .pipe(
        startWith(this.control.status),
        map(() => this._getFirstErrorKey()),
        distinctUntilChanged()
      )
      .pipe(filter(key => !!key))
      .subscribe((key) => {
        this._displayMessage(key);
      });
  }

  private _getFirstErrorKey(): string {
    if (this.control.status !== "INVALID") {
      return;
    }

    if (!this.control.errors) {
      return;
    }

    return Object.keys(this.control.errors)[0];
  }

  private _displayMessage(key: string): void {
    var error = this.errorFactory.createError(key, this.control, this.controlName, this.defaultErrorTemplate, this.customErrors);
    this._error$.next(error);
  }
}