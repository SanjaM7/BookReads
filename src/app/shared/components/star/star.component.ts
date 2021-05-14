import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarComponent {

  @Input() color = 'sm-color-grey';
  @Output() hovered = new EventEmitter<boolean>();
}
