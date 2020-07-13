import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './employee/list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './employee/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule } from './shared/material/material.model';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PageNotFoundComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
