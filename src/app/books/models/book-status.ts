export class BookStatus {
    public static readonly Read = new BookStatus('Read', 'Read');
    public static readonly CurrentlyReading = new BookStatus('CurrentlyReading', 'Currently Reading');
    public static readonly ToRead = new BookStatus('ToRead', 'Want To Read');

    public static readonly All = [BookStatus.Read, BookStatus.CurrentlyReading, BookStatus.ToRead];

    public get value(): string {
        return this._value;
    }

    public get message(): string {
        return this._message;
    }

    private constructor(
        private _value: string,
        private _message: string) {
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