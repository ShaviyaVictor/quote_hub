import { Component, Input, OnInit } from '@angular/core';

import { Quotes } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quote-insights',
  templateUrl: './quote-insights.component.html',
  styleUrls: ['./quote-insights.component.css']
})

export class QuoteInsightsComponent implements OnInit {

  @Input() quotin!: Quotes;
  
  constructor() { }

  ngOnInit(): void {
  }

}
