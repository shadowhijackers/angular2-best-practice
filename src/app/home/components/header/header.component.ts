import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {APPName} from '@app/config';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @APPName()
  appName: string;
  @Output() toggleMenu = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.toggleMenu.emit(null);
  }
}
