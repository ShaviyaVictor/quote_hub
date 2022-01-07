import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
   let today: Date = new Date(); // get current date and time
   let todayWithoutTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

   var dateDifference = Math.abs(todayWithoutTime - value); // returns value(value from the date declared in our array) in milliseconds
   
   const secondsInADay = 86400; //  60sec * 60min * 24hrs of the day

   var dateDifferenceInSeconds = dateDifference / 1000; //  to convert the milliseconds to seconds
   var daysCounter = dateDifferenceInSeconds / secondsInADay;

   if (daysCounter >= 1 && value < todayWithoutTime) {
     return daysCounter;
   }
   else {
     return 0;
   }
  }

}


//  the logic above will help us count how many days have passed since the quote was shared on the platform