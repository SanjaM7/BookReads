
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SbErrorDefDirective } from './directives/sb-error-def.directive';
import { Errors } from './errors.component';
import { ErrorsServiceFactory } from './errors.service-factory';
import { ErrorFactory } from './models/error-factory';

@NgModule({
  declarations: [
    Errors,
    SbErrorDefDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Errors,
    SbErrorDefDirective
  ],
  providers: [
    ErrorFactory,
    ErrorsServiceFactory]
})
export class ErrorsModule { }
