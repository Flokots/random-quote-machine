import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgProgressComponent } from 'ngx-progressbar';
import { QuoteRequestService } from 'src/app/services/quote-http/quote-request.service';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css'],
})
export class QuotesDisplayComponent implements OnInit {

  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;


 currentAuthor!: String;
 currentQuote!: String;

  constructor(private http: HttpClient, private quoteService:QuoteRequestService) { 
  
  }


  ngOnInit(){
    this.quoteService.quoteRequest();
  }
}
