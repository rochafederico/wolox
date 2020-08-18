import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../../components/about/about.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { WellcomeComponent } from '../../components/wellcome/wellcome.component';
import { HomeLandingComponent } from '../../pages/home-landing/home-landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    // Components
    AboutComponent,
    BenefitsComponent,
    HeaderComponent,
    LogoComponent,
    NavbarComponent,
    TechnologiesComponent,
    WellcomeComponent,
    // Pages
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
