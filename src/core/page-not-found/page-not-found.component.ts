import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-page-not-found',
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
