import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgProgress, NgProgressComponent, NgProgressRef } from 'ngx-progressbar';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css'],
  template: `
  <ng-progress id="myProgress"></ng-progress>
  `
})
export class QuotesDisplayComponent implements OnInit {

  progressRef!: NgProgressRef;

  @ViewChild(NgProgressComponent) 
  progressBar!: NgProgressComponent;
  currentQuote: String = '';
  currentAuthor: String = '';
  randomQuote!: Quote;

  constructor(private http: HttpClient, private progress: NgProgress) { }

  
  ngOnInit() {

    this.http.get<any>("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").subscribe(data => {
      // Successful API request
      let jsonQuotes = data
      console.log(jsonQuotes);
      console.log("above are json quotes")
      this.randomQuote = jsonQuotes.quotes[Math.floor(Math.random() * jsonQuotes.quotes.length)];
      console.log(this.randomQuote)
      console.log("I am a random quote above")

      this.currentQuote = this.randomQuote.quote;
      console.log(this.currentQuote);
      this.currentAuthor = this.randomQuote.author;
      console.log(this.currentAuthor);
    }, err => {
      
      this.randomQuote = new Quote("Never never give up!","Winston Churchill")
      this.currentQuote = this.randomQuote.quote;
      this.currentAuthor = this.randomQuote.author;
      console.log("An error occurred")
    })
  }
  
  ngAfterViewInit() {
    this.progressBar.start();
    // this.progressBar.complete();
  }
 
}
