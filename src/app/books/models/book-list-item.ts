import { Rating } from 'src/app/shared/models/rating';
import { Book } from './book';
import { IBookDto } from './book-dto';
import { BookStatus } from './book-status';
export class BookListItem {
    constructor(
        public id: string,
        public image: string | null,
        public title: string,
        public author: string,
        public rating: Rating,
        public status: BookStatus | null,
        public started: Date | null,
        public read: Date | null
    ) {}

    static FromBookDto(item: IBookDto): BookListItem {
        return new BookListItem(
            item.id.toString(),
            item.image,
            item.title,
            item.author,
            Rating.parse(item.rating),
            BookStatus.parse(item.status),
            item.started ? new Date(item.started) : null,
            item.read ? new Date(item.read) : null,
        );
    }

    static FromBook(item: Book): BookListItem {
        return new BookListItem(
            item.id,
            item.image,
            item.title,
            item.author,
            item.rating,
            item.status,
            item.started,
            item.read
        );
    }
}

