import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLandingComponent } from '../../components/home-landing/home-landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
