import { Injectable } from '@angular/core';
import { Rating } from 'src/app/shared/models/rating';
import { Adapter } from 'src/core/adapter';
import { IBookDto } from './book';
import { BookStatus } from './book-status';

export class BookListItem {
    constructor(
        public id: string | null,
        public image: string | null,
        public title: string,
        public author: string,
        public rating: Rating,
        public status: BookStatus,
        public started: string | null,
        public read: string | null
    ) {}
}

@Injectable({
    providedIn: 'root',
})
export class BookListItemAdapter implements Adapter<BookListItem, BookListItemAdapterModel> {
    adapt(item: BookListItemAdapterModel): BookListItem {
        return new BookListItem(
            item.data.id,
            item.data.image,
            item.data.title,
            item.data.author,
            Rating.parse(item.data.rating),
            BookStatus.parse(item.data.status),
            item.data.started,
            item.data.read
        );
    }
}

export class BookListItemAdapterModel { data!: IBookDto; }

