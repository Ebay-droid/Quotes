import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 
  quotes:Quote[]=
   [
    new Quote('And now that you dont have to be perfect, you can be good.', 'John Steinbeck','Ebay', new Date ()),
    new Quote('It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.', 'J.K.Rowling','Ebay',new Date()),
    new Quote('Everything is hard before it is easy.', 'Johann Wolfgang von Goethe','Ebay', new Date()),
    new Quote('Anyone who has never made a mistake has never tried anything new.', 'Albert Einstein','Ebay', new Date()),
    new Quote('Dont let your happiness depend on something you may lose.', 'C.S Lewis','Ebay', new Date ()),

  ];

  deleteQuote(toDelete, index){
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
  createNewQuote(quote){
    this.quotes.push(quote);
  
  }
  viewDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  constructor() {  }

  ngOnInit(): void {
  }

}
