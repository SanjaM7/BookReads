import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Rating } from '../../models/rating';

type OnChangeFunctionCallback = (rating: number | null) => {};
type OnTouchedFunctionCallback= () => void;
@Component({
  selector: 'sm-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RatingComponent,
    multi: true
  }]
})
export class RatingComponent {
  @Input() rating = Rating.None;
  @Input() allowEdit = false;
  onChange!: OnChangeFunctionCallback;
  onTouched!: OnTouchedFunctionCallback;

  Rating = Rating;
  hoveredRating = Rating.None;

  constructor(
    private cdr: ChangeDetectorRef,
    ) {
  }

  writeValue(value: number): void {
    this.rating = Rating.parse(value);
  }
  registerOnTouched(fn: OnTouchedFunctionCallback): void { this.onTouched = fn; }
  registerOnChange(fn: OnChangeFunctionCallback): void { this.onChange = fn; }

  onRatingSelected(index: Rating): void {
    this.rating = index;
    this.onChange(index.value);
  }

  getStarColorClass(index: Rating): string {
    // when not hovered
    if (this.hoveredRating === Rating.None) {
      return this._getStartColorClass(this.rating, index);
    }
    // when hovered
    return this._getStartColorClass(this.hoveredRating, index);
  }

  private _getStartColorClass(rating: Rating, index: Rating): string {
    if (rating.value && index.value && rating.value >= index.value) {
      return 'sm-color-gold';
    } else {
      return 'sm-color-grey';
    }
  }
}
