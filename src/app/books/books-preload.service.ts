import { Injectable } from '@angular/core';
import { BookStateService } from './book-state.service';
import { BookStatus } from './models/book-status';

export function booksPreloadFactory(booksPreloadService: BooksPreloadService): () => Promise<boolean> {
  return () => {
      return booksPreloadService.preloadBooks();
  };
}

@Injectable()
export class BooksPreloadService {

  constructor(private bookStateService: BookStateService) { }

  preloadBooks(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.bookStateService.getBooks(BookStatus.All)
        .subscribe(
          (books) => {
            resolve(true);
          },
          (error) => reject(error)
        );
    });
  }
}
