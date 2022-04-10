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
  popularVoted(quo:any){
    for(let i=0;i<quo.length;i++){
      if(quo[i].upVotes>this.popularVotes){
        this.popularVotes=quo[i];
 
      }
    }
 
  }
upVoting=(index:number)=>{
  this.descquotes[index].like++;
}
downVoting=(index:number)=>{
  this.descquotes[index].dislike++;
}
topVoted(){

}
}

