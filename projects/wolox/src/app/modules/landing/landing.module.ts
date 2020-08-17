import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeLandingComponent } from '../../pages/home-landing/home-landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    HomeLandingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
