import {Component, OnInit} from '@angular/core';

import {MessageService} from '@shared/providers';


@Component({
  selector: 'candidates-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.messageService.showProgressBar('test');
    setTimeout(() => {
      this.messageService.closeProgressBar();
    }, 15000);
  }


}
