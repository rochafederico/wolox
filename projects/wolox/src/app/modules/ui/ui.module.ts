import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from '../../components/field/field.component';
import { LogoComponent } from '../../components/logo/logo.component';

@NgModule({
  declarations: [
    FieldComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FieldComponent,
    LogoComponent
  ]
})
export class UiModule { }
