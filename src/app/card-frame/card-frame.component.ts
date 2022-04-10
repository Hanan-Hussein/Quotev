import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-frame',
  templateUrl: './card-frame.component.html',
  styleUrls: ['./card-frame.component.css']
})
export class CardFrameComponent implements OnInit {
@Input('ItemsQuote') quoteItems:any=[];
// votes:any=[]
  constructor() { }

  ngOnInit(): void {
    
  }
getQuote(quote:any,str:string){
return quote[str]
}

}
