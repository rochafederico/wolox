import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { UiModule } from '../../modules/ui/ui.module';
import { LoginComponent } from '../../pages/login/login.component';
import { LoginService } from '../../services/login.service';

@NgModule({
  declarations: [
    // Pages
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
