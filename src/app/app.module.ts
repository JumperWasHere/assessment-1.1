import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppPage } from './app.page';
import { Select2Component } from './select2/select2.component';

@NgModule({
  declarations: [
    AppPage,
    Select2Component
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  bootstrap: [
    AppPage
  ]
})
export class AppModule { }
