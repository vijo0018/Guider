import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {SidebarComponent} from '../components/sidebar/sidebar.component';
import { ChangerComponent } from './changer/changer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChangerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
