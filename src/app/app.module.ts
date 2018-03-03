import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RootRouter} from "./orchard/router/router";


import { AppComponent } from './app.component';
import { HomeComponent } from './orchard/components/home/home.component';
import { HeightlineDirective } from './orchard/directives/heightline.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeightlineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
