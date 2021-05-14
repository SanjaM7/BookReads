export class BookStatus {
    public static readonly Read = new BookStatus('Read');
    public static readonly CurrentlyReading = new BookStatus('Currently-Reading');
    public static readonly ToRead = new BookStatus('To-Read');

    public static readonly All = [BookStatus.Read, BookStatus.CurrentlyReading, BookStatus.ToRead];

    public get value(): string {
        return this._value;
    }

    private constructor(private _value: string) {
    }

    public static parse(status: string): BookStatus {
        if (BookStatus.Read.is(status)) {
            return BookStatus.Read;
        }
        else if (BookStatus.CurrentlyReading.is(status)) {
            return BookStatus.CurrentlyReading;
        }
        else if (BookStatus.ToRead.is(status)) {
            return BookStatus.ToRead;
        }
        else {
            throw new Error('Status not recognized');
        }
    }

    private is(status: string): boolean {
        return this._value.toLowerCase() === status.toLowerCase();
    }
}