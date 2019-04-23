import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter.store';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({counter: counterReducer}, ) 
    ],
  declarations: [ AppComponent, MyCounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
