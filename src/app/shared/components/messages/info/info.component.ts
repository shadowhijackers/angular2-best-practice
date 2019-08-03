import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() message = '';
  constructor(
  ) {
  }

  ngOnInit() {
  }

}
