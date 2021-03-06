export class Rating {
  public static One = new Rating(1, 'did not like it');
  public static readonly Two = new Rating(2, 'it was ok');
  public static readonly Three = new Rating(3, 'liked it');
  public static readonly Four = new Rating(4, 'really liked it');
  public static readonly Five = new Rating(5, 'it was amazing');
  public static readonly None = new Rating(null, '');

  public static readonly All = [Rating.One, Rating.Two, Rating.Three, Rating.Four, Rating.Five];

  public get value(): number | null {
    return this._value;
  }

  public get title(): string {
    return this._title;
  }

  public constructor(
    private _value: number | null,
    private _title: string) {
  }

  public static parse(rating: number | null): Rating {
    switch (rating) {
        case Rating.One._value: {
          return Rating.One;
        }
        case Rating.Two._value: {
            return Rating.Two;
        }
        case Rating.Three._value: {
            return Rating.Three;
        }
        case Rating.Four._value: {
            return Rating.Four;
        }
        case Rating.Five._value: {
            return Rating.Five;
        }
        default: {
          return Rating.None;
        }
    }
  }
}
