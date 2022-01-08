import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Quotes } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quote-insights',
  templateUrl: './quote-insights.component.html',
  styleUrls: ['./quote-insights.component.css']
})

export class QuoteInsightsComponent implements OnInit {

  @Input() quotin!: Quotes;

  //    Create a new function defined by the @output decorator as an Event Emitter that takes in a boolean
  @Output() isDeleted = new EventEmitter<boolean>();
  deleteQuote(deleted: boolean){
    this.isDeleted.emit(deleted);
  }
 
  //  Declaring the functions to enable us capture the likes and dislikes
  likeQuote(){
    this.quotin.likes++
  }
  dislikeQuote(){
    this.quotin.dislikes++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
