import { Component, OnInit } from '@angular/core';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;

  formLogin = new FormGroup({
    emailInput: new FormControl(''),
    passInput: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formLogin.value);
  }

}
