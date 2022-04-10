import { Pipe, PipeTransform } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';


@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {
  
  transform(value: any): number {
    // let todayDate: any = new Date();
     var dateCounter : any;

     let todayDate: any = new Observable<string>((observer: Observer<any>) => {
      setInterval(() => observer.next(new Date()), 1000);
    });
  todayDate.subscribe((event: any) => {
      
      
      var dateDifference = Math.abs(event - value) //millisecond
    // console.log(dateDifference);
    
    const secondsInDay = 60; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var datedifferenceSeconds = dateDifference * 0.001;
   var  dateCounter = datedifferenceSeconds / secondsInDay;
 
   if (dateCounter >= 1) {
      
    return dateCounter;
  }
  else {
    return 0;

  }
  
    });   
    return 0;
  }

}
