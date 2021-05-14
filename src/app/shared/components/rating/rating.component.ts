import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Rating } from '../../models/rating';

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
export class RatingComponent implements ControlValueAccessor {
  @Input() rating = Rating.NullInstance;
  @Input() allowEdit = false;
  onChange!: Function;

  Rating = Rating;
  hoveredRating = Rating.NullInstance;

  writeValue(value: Rating) { value ? this.rating = value : Rating.NullInstance };
  registerOnTouched(fn: Function) {};
  registerOnChange(fn: Function) { this.onChange = fn };

  onRatingSelected(index: Rating) {
    this.rating = index;
    this.onChange(index);
  }
  
  getStarColorClass(index: Rating): string {
    // when not hovered
    if (this.hoveredRating === Rating.NullInstance) {
      return this._getStartColorClass(this.rating, index);
    }
    // when hovered
    return this._getStartColorClass(this.hoveredRating, index);
  }

  private _getStartColorClass(rating: Rating, index: Rating): string {
    return rating.value >= index.value ? 'sm-color-gold' : 'sm-color-grey';
  }
}
