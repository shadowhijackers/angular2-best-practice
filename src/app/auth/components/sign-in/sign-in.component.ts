import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() submit = new EventEmitter();
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.setLoginForm();
  }

  submitForm() {
    this.submit.emit(this.loginForm.getRawValue());
  }

  private setLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      passsword: ['', Validators.required]
    });
  }

}

