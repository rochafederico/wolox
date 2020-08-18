import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from '../../pages/home/home.component';

@NgModule({
  declarations: [
    // Pages
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule,
    HomeRoutingModule
  ],
  providers: []
})
export class LoginModule { }
