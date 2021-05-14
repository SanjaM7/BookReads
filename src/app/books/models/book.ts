import { Injectable } from '@angular/core';
import { Rating } from 'src/app/shared/models/rating';
import { Adapter } from 'src/core/adapter';
import { BookStatus } from './book-status';

export class Book {
    constructor(
        public id: string | null,
        public image: string | null,
        public title: string,
        public author: string,
        public rating: Rating,
        public status: BookStatus | null,
        public started: string | null,
        public read: string | null,
        public description: string | null,
        public published: string,
        public numberOfPages: number | null,
        public genres: string[]
    ) {}
}

@Injectable({
    providedIn: 'root',
})
export class BookAdapter implements Adapter<Book, BookAdapterModel> {
    adapt(item: BookAdapterModel): Book {
        return new Book(
            item.data.id,
            item.data.image,
            item.data.title,
            item.data.author,
            Rating.parse(item.data.rating),
            BookStatus.parse(item.data.status),
            item.data.started,
            item.data.read,
            item.data.description,
            item.data.published,
            item.data.numberOfPages,
            item.data.genres
        );
    }
}

export class BookAdapterModel { data!: IBookDto; }

export interface IBookDto {
    id: string | null;
    image: string | null;
    title: string;
    author: string;
    rating: number | null;
    status: string;
    started: string | null;
    read: string | null;
    description: string;
    published: string;
    numberOfPages: number;
    genres: string[];
}
