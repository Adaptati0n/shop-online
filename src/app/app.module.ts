import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'C:/shop-online/frontend/components/partials/header/header.component';
import { HomeComponent } from './components/page/home/home.component';
import {RatingModule} from "ngx-bootstrap/rating";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule.forRoot()



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
