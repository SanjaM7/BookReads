import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const bookId = Number(route.paramMap.get('id'));
    if (isNaN(bookId) || bookId < 0) {
      alert('Invalid book id');
      this._router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
