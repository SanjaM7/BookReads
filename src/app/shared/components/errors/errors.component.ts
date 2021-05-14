import { ChangeDetectorRef, Component, ContentChildren, Input, Optional, QueryList, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { CapitalizeFirstLetterPipe } from '../../pipes/capitalize-first-letter.pipe';
import { SplitOnCapitalLetterPipe } from '../../pipes/split-on-capital-letter.pipe';
import { SbErrorDefDirective } from './directives/sb-error-def.directive';
import { ErrorsServiceFactory } from './errors.service-factory';
import { ValidationError } from './models/error-messages';

@Component({
  selector: 'sb-errors, [sb-errors]',
  templateUrl: './errors.component.html',
  encapsulation: ViewEncapsulation.None
})
export class Errors<T> {

  private _control: AbstractControl;
  @Input('sb-errors') set control(value: any) {
    if (value && value instanceof AbstractControl) {
      this._control = value;
    }
  }

  private _controlName: string;
  @Input() set controlName(value: string) {
    if (value && value.constructor === String) {
      this._controlName = value;
    } 
  }

  @ViewChild(SbErrorDefDirective) defaultErrorMessagTemplate: SbErrorDefDirective;
  @ContentChildren(SbErrorDefDirective, { descendants: true }) customErrorMessages: QueryList<SbErrorDefDirective>;
  @ViewChild('sbErrorOutlet', { read: ViewContainerRef }) sbErrorOutletViewContainer: ViewContainerRef;
  @ViewChild('defaultErrorTemplate', { read: TemplateRef }) defaultErrorTemplate: TemplateRef<any>

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Optional() private readonly matFormField: MatFormField,
    private errorsServiceFactory: ErrorsServiceFactory,
    private readonly splitOnCapitalLetterPipe: SplitOnCapitalLetterPipe,
    private readonly capitalizeFirstLetterPipe: CapitalizeFirstLetterPipe) {
  }

  ngAfterViewInit() {
    this.setControlValue();
    this.setControlName();
    let errorsService = this.errorsServiceFactory.create(this._control, this._controlName, this.customErrorMessages, this.defaultErrorTemplate);
    errorsService.error$.subscribe(
      (error) => {
        this.sbErrorOutletViewContainer.clear();
        this._populateErrorOutlet(error);
      }
    )
  }

  private setControlValue() {
    if (this._control) {
      return;
    }

    if (!this.matFormField) {
      throw new Error("This directive is not a part of mat-form-field");
    }

    this._control = this.matFormField._control.ngControl.control;
  }

  private setControlName() {
    if (this._controlName) {
      return;
    }

    this._controlName = this._getControlName(this._control);
  }

  private _getControlName(control: AbstractControl): string | null {
    const formGroup = control.parent.controls;
    let controlName = Object.keys(formGroup).find(name => control === formGroup[name]);
    controlName = this.splitOnCapitalLetterPipe.transform(controlName);
    controlName = controlName.toLowerCase();
    controlName = this.capitalizeFirstLetterPipe.transform(controlName);
    return controlName;
  }

  private _populateErrorOutlet(error: ValidationError) {
    var template = error.template;
    var context = error.context;
    this.sbErrorOutletViewContainer.createEmbeddedView(template, { $implicit: context });
    this.changeDetectorRef.detectChanges();
  }
}