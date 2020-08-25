import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter<boolean>();

  quoteDelete(Delete:boolean){
    this.toDelete.emit(Delete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}