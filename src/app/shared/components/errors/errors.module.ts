
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDefDirective } from './directives/error-def.directive';
import { ErrorsComponent } from './errors.component';
import { ErrorsServiceFactory } from './errors.service-factory';
import { ErrorFactory } from './models/error-factory';
@NgModule({
  declarations: [
    ErrorsComponent,
    ErrorDefDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorsComponent,
    ErrorDefDirective
  ],
  providers: [
    ErrorFactory,
    ErrorsServiceFactory
  ]
})
export class ErrorsModule { }
