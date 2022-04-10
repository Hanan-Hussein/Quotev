import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotev';
  popularVotes:number=0;
//   items:any=[{quote:"Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
// author:"Virginia Woolf",editor:" Hanan Hussein",created:new Date(2022,3,9),like:0,dislike:0}];

// items:Quotes[] =[
//   new Quotes("Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
//   "Virginia Woolf"," Hanan Hussein",new Date(2022,3,9),0,0)
// ];

  // AddnewQuote = (obj: any) => {
  //   this.items.unshift(obj);
  //   console.log(this.items);

  // };


}
