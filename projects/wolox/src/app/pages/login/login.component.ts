import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'wlx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false, [])
  });
  submitted = false;
  constructor(private loginSrv: LoginService){}
  login(): void{
    this.submitted = true;
    if (this.form.valid){
      this.form.disable();
      this.loginSrv.login(
        this.form.value.email,
        this.form.value.password,
        this.form.value.remember
        )
      .subscribe((data) => {
        this.form.enable();
        debugger
      });
    }
  }
}
