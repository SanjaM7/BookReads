export interface IBookDto {
    id: string | number;
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
