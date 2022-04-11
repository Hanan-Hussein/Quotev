import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() descquotes:any=[];

  like=0;
  dislike=0;
  popularVotes:number=0;

  @Output() vote=new EventEmitter()
  
  constructor() {
    
   }

  ngOnInit(): void {

    
  }

topVoted(){

}
}
