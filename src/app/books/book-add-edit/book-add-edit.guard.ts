import { Injectable } from '@angular/core';
import { CanDeactivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookAddEditComponent } from './book-add-edit.component';

@Injectable({
  providedIn: 'root'
})
export class BookAddEditGuard implements CanDeactivate<BookAddEditComponent> {
  constructor(private _router: Router) {}

  canDeactivate(component: BookAddEditComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const navObject = this._router.getCurrentNavigation();
    if (navObject && navObject.extras.state && navObject.extras.state.bypassGuard === true) {
      return true;
    }

    if (component.form.dirty) {
      const bookTitle = component.form.controls.title.value || 'New Book';
      return confirm(`Are you sure you want to navigate away from this page?\nChanges you made to ${bookTitle} will be lost`);
    }

    return true;
  }

}
