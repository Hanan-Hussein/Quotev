import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() fetchquotes: any = [];
  item: any = []

  like = 0;
  dislike = 0;
  popularVotes: number = 0;
  constructor() {
    
  }

  ngOnInit(): void {


  }
  popularVoted() {
    for (let i = 0; i < this.fetchquotes.length; i++) {
      if (this.fetchquotes[i].like > this.popularVotes) {
        this.popularVotes = this.fetchquotes[i].like;

      }
    }

  }
  upVoting = (index: number) => {
    this.fetchquotes[index].like++;
    this.popularVoted();

  }
  downVoting = (index: number) => {
    this.fetchquotes[index].dislike++;
  }
  removeQuote(del: any, index: any) {
    if (del) {
      this.fetchquotes.splice(index,1);
    }
  }

}
