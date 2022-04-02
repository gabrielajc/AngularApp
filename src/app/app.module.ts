import { IMaskModule } from 'angular-imask';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, FirstComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IMaskModule,
    TooltipModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
