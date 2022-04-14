import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  currentQuote!: String;
  currentAuthor!: String;
  randomQuote!: Quote;

  constructor(private http:HttpClient) { 
  
  }

   quoteRequest() {
     let promise = new Promise((resolve, reject) => {
       this.http.get<any>("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").toPromise().then((response: any) => {
        //Successful Api response
      let jsonQuotes = response;

      // Calculate the index for the random number
      this.randomQuote = jsonQuotes.quotes[Math.floor(Math.random() * jsonQuotes.quotes.length)];
     
      this.currentQuote = this.randomQuote.quote;
      this.currentAuthor = this.randomQuote.author;

      resolve(response)
      
       }, (error: any) => {
        this.randomQuote = new Quote("Never never give up!", "Winston Churchill")
        this.currentQuote = this.randomQuote.quote;
        this.currentAuthor = this.randomQuote.author;

         reject(error)
       })
     })
     return promise
   }
}
