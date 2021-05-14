import { BookStatus } from './book-status';

export class BookNew {
    constructor(
        public id: string | null,
        public image: string | null,
        public title: string,
        public author: string,
        public status: BookStatus | null,
        public description: string | null,
        public published: string,
        public numberOfPages: number | null,
        public genres: string[]
    ) {}
}