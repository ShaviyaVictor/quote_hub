//    import the FormsModule for interactivity btwn the app and the form

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './pipes/date-count.pipe';
import { QuoteInsightsComponent } from './quote/quote-insights/quote-insights.component';
import { QuoteFormComponent } from './quote/quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DateCountPipe,
    QuoteInsightsComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
