import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'shared-warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {

  @Input() message = '';
  @Output() cancel = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cancelHandler() {
    this.cancel.emit(null);
  }

}
