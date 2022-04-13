import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  currentQuote: String = '';
  currentAuthor: String = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      quotes: Quote;
    }

    this.http.get<any>("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").subscribe(data => {
      // Successful API request
      let jsonQuotes = data
      console.log(jsonQuotes);
      console.log("above are json quotes")
      let randomQuote: Quote = jsonQuotes.quotes[Math.floor(Math.random() * jsonQuotes.quotes.length)];
      console.log(randomQuote)
      console.log("I am a random quote above")

      this.currentQuote = randomQuote.quote;
      console.log(this.currentQuote);
      this.currentAuthor = randomQuote.author;
      console.log(this.currentAuthor);
    })
  }

}
