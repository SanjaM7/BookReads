import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[sbErrorDef]',
})
export class SbErrorDefDirective implements OnInit {
  @Input() sbErrorDefFor!: string;
  constructor(
    public template: TemplateRef<any>,
    public viewContainer: ViewContainerRef) {}

  ngOnInit() {
    if (!this.sbErrorDefFor) {
      throw getSbErrorDefMissingForError();
    }
  }
}

export function getSbErrorDefMissingForError(): Error {
  return Error(
    `'for' must be set for sbErrorDef. Example: *sbErrorDef="let error; for: 'pattern'`
  );
}
