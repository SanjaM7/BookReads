import { Injectable, QueryList, TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorDefDirective } from './directives/error-def.directive';
import { ErrorsService } from './errors.service';
import { ErrorFactory } from './models/error-factory';
@Injectable()
export class ErrorsServiceFactory {
  constructor(
    private customErrorFactory: ErrorFactory) {
  }

  public create(
    control: AbstractControl,
    controlName: string,
    customErrorMessages: QueryList<ErrorDefDirective>,
    defaultErrorTemplate: TemplateRef<any>): ErrorsService {
    return new ErrorsService(
      control,
      controlName,
      customErrorMessages,
      this.customErrorFactory,
      defaultErrorTemplate);
  }
}
