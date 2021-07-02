import {
  AfterViewInit,
  ChangeDetectorRef, Component, ContentChildren, Input, Optional, QueryList, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { ErrorDefDirective } from './directives/error-def.directive';
import { ErrorsServiceFactory } from './errors.service-factory';
import { ValidationError } from './models/error-messages';
import { MakeControlNamePipe } from './pipes/make-control-name.pipe';
@Component({
  selector: 'sm-errors, [sm-errors]',
  templateUrl: './errors.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ErrorsComponent implements AfterViewInit {

  private _control!: AbstractControl;
  @Input('sm-errors') set control(value: AbstractControl | '') {
    if (value && value instanceof AbstractControl) {
      this._control = value;
    }
  }

  private _controlName!: string;
  @Input() set controlName(value: string) {
    if (value && value.constructor === String) {
      this._controlName = value;
    }
  }

  @ViewChild(ErrorDefDirective) defaultErrorMessagTemplate!: ErrorDefDirective;
  @ContentChildren(ErrorDefDirective, { descendants: true }) customErrorMessages!: QueryList<ErrorDefDirective>;
  @ViewChild('errorOutlet', { read: ViewContainerRef }) errorOutletViewContainer!: ViewContainerRef;
  @ViewChild('defaultErrorTemplate', { read: TemplateRef }) defaultErrorTemplate!: TemplateRef<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Optional() private readonly matFormField: MatFormField,
    private errorsServiceFactory: ErrorsServiceFactory,
    private readonly makeControlNamePipe: MakeControlNamePipe) {
  }

  ngAfterViewInit(): void {
    this._setControlValue();
    this._setControlName();
    const errorsService = this.errorsServiceFactory.create(
      this._control, this._controlName, this.customErrorMessages, this.defaultErrorTemplate
      );
    errorsService.error$.subscribe(
      (error) => {
        this.errorOutletViewContainer.clear();
        if (!error) {
          return;
        }
        this._populateErrorOutlet(error);
      }
    );
  }

  private _setControlValue(): void {
    if (this._control) {
      return;
    }

    const control = this.matFormField._control.ngControl?.control;
    if (!control) {
      throw new Error('This directive is not a part of mat-form-field');
    }

    this._control = control;
  }

  private _setControlName(): void {
    if (this._controlName) {
      return;
    }

    this._controlName = this._getControlName(this._control);
  }

  private _getControlName(control: AbstractControl): string {
    const group = control.parent as FormGroup;
    let controlName = Object.keys(group.controls).find(key => {
      const childControl = group.get(key);

      if (childControl !== control) {
        return null;
      }

      return key;
    });

    if (!controlName) {
      throw new Error('Error not found');
    }

    controlName = this.makeControlNamePipe.transform(controlName);
    return controlName;
  }

  private _populateErrorOutlet(error: ValidationError): void {
    const template = error.template;
    const context = error.context;
    this.errorOutletViewContainer.createEmbeddedView(template, { $implicit: context });
    this.changeDetectorRef.detectChanges();
  }
}




