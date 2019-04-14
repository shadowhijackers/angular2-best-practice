import {Component, OnInit} from '@angular/core';
import {APPName} from '../../../config';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @APPName()
  appName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
