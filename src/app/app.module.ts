import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialInterceptor } from './interceptors/credential.interceptor';
import { MainModule } from './main/main.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    HttpClientModule,
    MainModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
