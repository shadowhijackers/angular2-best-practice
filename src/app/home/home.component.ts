import {Component, OnInit} from '@angular/core';

const NAV_DATAS = [
  {
    name: 'DASHBOARD',
    routerLink: '.',
    icon: 'home'
  },
  {
    name: 'CANDIDATES',
    routerLink: '.',
    icon: 'people'
  },
  {
    name: 'CURRENT CANDIDATES',
    routerLink: '.',
    icon: 'person'
  },
  {
    name: 'SHEDULED CANDIDATES',
    routerLink: '.',
    icon: 'person'
  },
];

@Component({
  selector: 'candidates-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navDatas = NAV_DATAS;

  constructor() {
  }

  ngOnInit() {
  }

}
