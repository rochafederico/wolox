import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';

// Servicios
import { LoginService } from '../services/login.service';

@Injectable()
@NgModule({
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [LoginService]
    };
  }
}
