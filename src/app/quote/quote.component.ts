import { Component, OnInit } from '@angular/core';

import { Quotes } from '../classes/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  
  quotes: Quotes[] = [
    new Quotes (1, 'Either write something worth reading or do something worth writing.', 'Victor Shaviya', 'Benjamin Franklin', new Date(2022,0,7)),
    new Quotes (2, 'Graduation is an exciting time. It marks both an ending and a beginning; it\’s warm memories of the past and big dreams for the future.', 'Josphine Mbaisi', 'UWI, Mona', new Date(2022,1,10)),
    new Quotes (3, 'When the last point is done, we are humans. Give your opponent a hug and say, \'great fight,\' and that\'s all.', 'Norris Ambune', 'Novak Djokovic', new Date(2021,11,22))
  ]

  //  the toggle function takes index of type any as an argument and the logic for displaying the insights defined to change the showInsights from false to true and vise versa
  toggleInsights(index: any) {
    this.quotes[index].showInsights = !this.quotes[index].showInsights;
  }

  quoteDelete(isDeleted: boolean, index: any){
    if (isDeleted){
      let toDelete = confirm('Do you want the quote deleted?');

      if(toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
