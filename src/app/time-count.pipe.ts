import { Pipe, PipeTransform } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';


@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {
  transform(value:any): any {
 
        // let todayDate:any = new Date();

      const seconds = Math.abs((value) / 1000);
     
      const intervals:any = {
          'year': 31536000,
          'month': 2592000,
          'week': 604800,
          'day': 86400,
          'hour': 3600,
          'minute': 60,
          'second': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds/ intervals[i]);
          if (counter > 0)
              if (counter === 1) {
                  return counter + ' ' + i + ' ago'; // singular (1 day ago)
              } else {
                  return counter + ' ' + i + 's ago'; // plural (2 days ago)
              }
      }
  
  return 0;
}
    // let todayDate: any = new Date();
    // let newTime: any;

    // let todayDate: any = new Observable<string>((observer: Observer<any>) => {
    //   setInterval(() => observer.next(new Date()), 1000);
    // });
    // todayDate.subscribe((event: any) => {
    //   var dateDifference = Math.abs(event - value) //millisecond
    //   // console.log(dateDifference);
    //   const secondsInDay = 60; //60 seconds * 60 minutes in an hour * 24 hours in a day
    //   var datedifferenceSeconds = dateDifference * 0.001;
    //   var dateCounter = datedifferenceSeconds / secondsInDay;
    //   newTime = dateCounter;
    //   if (dateCounter >= 1) {
    //     // console.log(dateCounter);

    //     return dateCounter;
    //   }
    //   else {
    //     return 0;

    //   }
    // });
    // console.log(newTime);

    // return 0;

  }


