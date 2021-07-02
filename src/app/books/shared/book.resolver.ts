import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Rating } from 'src/app/shared/models/rating';
import { BookStateService } from '../book-state.service';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Observable<Book>> {

  constructor(private bookStateService: BookStateService) {}

  Rating = Rating;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Book>> {
    const id = route.paramMap.get('id');
    if (!id ||  id === '0') {
      const book = new Book('0', null, '', '', Rating.None, null, null, null, '', null, null, []);
      return of(of(book));
    }

    const book$ = this.bookStateService.getBook(id);
    return of(book$);
  }
}
