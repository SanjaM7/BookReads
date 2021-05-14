import { Inject, Injectable, Optional, QueryList, TemplateRef } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SbErrorDefDirective } from "../directives/sb-error-def.directive";
import { DEFAULT_ERROR_MESSAGES, ErrorContext, IDefaultErrors, SB_ERROR_DEFAULT_OPTIONS, ValidationError } from "./error-messages";


@Injectable()
export class ErrorFactory {

  private _defaultErrorMessages: IDefaultErrors;
  constructor(
    @Optional() @Inject(SB_ERROR_DEFAULT_OPTIONS) defaultErrorMessages: IDefaultErrors | null) {
    this._defaultErrorMessages = defaultErrorMessages || DEFAULT_ERROR_MESSAGES;
  }

  private tryCreateCustomError(
    key: string,
    context: any,
    customErrors: QueryList<SbErrorDefDirective>): ValidationError {
    var customError = customErrors
      .find(directive => key === directive.sbErrorDefFor);

    if (customError) {
      return new ValidationError(customError.template, context);
    }

    return null;
  }

  private tryCreateDefaultError(
    key: string,
    control: AbstractControl,
    controlName: string,
    template: TemplateRef<any>): ValidationError {
    var context = this._defaultErrorMessages[key];
    if (!context) {
      return null;
    }

    if (typeof context == 'function') {
      var ctx = <ErrorContext<any>>{
        controlName: controlName,
        error: control.errors[key]
      };

      context = context(ctx);
    }

    const defaultErrorMessage = new ValidationError(template, context);
    return defaultErrorMessage;
  }

  public createError(
    key: string,
    control: AbstractControl,
    controlName: string,
    defaultErrorTemplate: TemplateRef<any>,
    customErrors: QueryList<SbErrorDefDirective>): ValidationError {

    var error = this.tryCreateCustomError(key, control.errors[key], customErrors);
    if (error) {
      return error;
    }

    error = this.tryCreateDefaultError(key, control, controlName, defaultErrorTemplate);
    if (error) {
      return error;
    }

    return new ValidationError(defaultErrorTemplate, "Invalid value");
  }
}
