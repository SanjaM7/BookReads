import { Rating } from 'src/app/shared/models/rating';
import { IBookDto } from './book-dto';
import { BookStatus } from './book-status';
export class Book {

    editBook: boolean;
    constructor(
        public id: string,
        public image: string | null,
        public title: string,
        public author: string,
        public rating: Rating,
        public status: BookStatus | null,
        public started: Date | null,
        public read: Date | null,
        public description: string | null,
        public published: Date | null,
        public numberOfPages: number | null,
        public genres: string[]
    ) {
        this.editBook = this.id !== '0';
    }

    static FromBookDto(item: IBookDto): Book {
        return new Book(
            item.id.toString(),
            item.image,
            item.title,
            item.author,
            Rating.parse(item.rating),
            BookStatus.parse(item.status),
            item.started ? new Date(item.started) : null,
            item.read ? new Date(item.read) : null,
            item.description,
            new Date(item.published),
            item.numberOfPages,
            item.genres
        );
    }
}

