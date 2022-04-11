import { Component, OnInit,Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-card-frame',
  templateUrl: './card-frame.component.html',
  styleUrls: ['./card-frame.component.css']
})
export class CardFrameComponent implements OnInit {
// @Input('ItemsQuote') quoteItems:any=[];
// votes:any=[]
items:any=[{quote:"Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
author:"Virginia Woolf",editor:" Hanan Hussein",created:new Date(2022,3,9),like:0,dislike:0}];

  constructor() {
    // console.log(this.quoteItems);
    
   }

  ngOnInit(): void {
  }
  AddnewQuote = (obj: any) => {
    obj.created=new Date();
    this.items.unshift(obj);
    console.log(this.items);

  };
getQuote(quote:any,str:string){
return quote[str]

}

}
