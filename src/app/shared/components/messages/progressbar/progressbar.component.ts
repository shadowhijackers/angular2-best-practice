import { Component, OnInit } from '@angular/core';
import {  Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {State} from '@app/store/reducers';
import {MessageSelectors} from '@app/store/messages/message.selectors';


@Component({
  selector: 'shared-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  progressBarState$: Observable<boolean>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.progressBarState$ = this.store.pipe(
      select(MessageSelectors.progressBarState)
    );
  }

}
