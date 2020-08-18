import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ServicesModule } from './modules/setvices.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTokenGuard } from './user-token.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServicesModule.forRoot()
  ],
  providers: [UserTokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
