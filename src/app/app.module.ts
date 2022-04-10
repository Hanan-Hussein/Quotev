import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { CardComponent } from './card/card.component';
import { CardFrameComponent } from './card-frame/card-frame.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { TimeCountPipe } from './time-count.pipe';
import { HighestVoteDirective } from './highest-vote.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddQuoteComponent,
    CardComponent,
    CardFrameComponent,
    QuoteDescriptionComponent,
    TimeCountPipe,
    HighestVoteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
