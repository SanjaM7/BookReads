import { Inject, Injectable, Optional, QueryList, TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorDefDirective } from '../directives/error-def.directive';
import { DEFAULT_ERROR_MESSAGES, ErrorContext, IDefaultErrors, SB_ERROR_DEFAULT_OPTIONS, ValidationError } from './error-messages';
@Injectable()
export class ErrorFactory {

  private _defaultErrorMessages: IDefaultErrors;
  constructor(
    @Optional() @Inject(SB_ERROR_DEFAULT_OPTIONS) defaultErrorMessages: IDefaultErrors | null) {
    this._defaultErrorMessages = defaultErrorMessages || DEFAULT_ERROR_MESSAGES;
  }

  private _tryCreateCustomError(
    key: string,
    context: any,
    customErrors: QueryList<ErrorDefDirective>): ValidationError | null {
    const customError = customErrors.find(directive => key === directive.errorDefFor);

    if (customError) {
      return new ValidationError(customError.template, context);
    }

    return null;
  }

  private _tryCreateDefaultError(
    key: string,
    control: AbstractControl,
    controlName: string,
    template: TemplateRef<any>): ValidationError | null {
    let context = this._defaultErrorMessages[key];
    if (!context) {
      return null;
    }

    if (typeof context === 'function') {
      const ctx = {
        controlName,
        error: Object.values(control.errors!)[0]
      } as ErrorContext<any>;

      context = context(ctx);
    }

    const defaultErrorMessage = new ValidationError(template, context);
    return defaultErrorMessage;
  }

  createError(
    key: string,
    control: AbstractControl,
    controlName: string,
    defaultErrorTemplate: TemplateRef<any>,
    customErrors: QueryList<ErrorDefDirective>): ValidationError {

    let error = this._tryCreateCustomError(key, Object.values(control.errors!)[0], customErrors);
    if (error) {
      return error;
    }

    error = this._tryCreateDefaultError(key, control, controlName, defaultErrorTemplate);
    if (error) {
      return error;
    }

    return new ValidationError(defaultErrorTemplate, 'Invalid value');
  }
}
