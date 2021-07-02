import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[errorDef]',
})
export class ErrorDefDirective implements OnInit {
  @Input() errorDefFor!: string;
  constructor(
    public template: TemplateRef<any>,
    public viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
    if (!this.errorDefFor) {
      throw Error(`'for' must be set for errorDef. Example: *errorDef="let error; for: 'pattern'`);
    }
  }
}
