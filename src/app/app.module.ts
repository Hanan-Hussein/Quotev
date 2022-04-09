import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { CardComponent } from './card/card.component';
import { CardFrameComponent } from './card-frame/card-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddQuoteComponent,
    CardComponent,
    CardFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
