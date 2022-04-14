import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from 'ngx-progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDisplayComponent } from './components/quotes-display/quotes-display.component';
import { QuoteRequestService } from './services/quote-http/quote-request.service';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
  ],
  providers: [QuoteRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
