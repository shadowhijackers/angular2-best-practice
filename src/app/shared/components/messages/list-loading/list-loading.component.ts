import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-list-loading',
  templateUrl: './list-loading.component.html',
  styleUrls: ['./list-loading.component.scss']
})
export class ListLoadingComponent implements OnInit {

  @Input() isLoading = false;
  @Input() isDataAvailableInDataSource = false;
  @Input() message = 'Empty data found';

  constructor() {
  }

  ngOnInit() {
  }

  canShowDialogBox() {
    return !this.isDataAvailableInDataSource || this.isLoading;
  }


}
