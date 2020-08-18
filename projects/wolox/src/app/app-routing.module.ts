import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./modules/landing/landing.module')
      .then(m => m.LandingModule);
    }
  },
  {
    path: 'login',
    loadChildren: () => {
      return import('./modules/login/login.module')
      .then(m => m.LoginModule);
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
