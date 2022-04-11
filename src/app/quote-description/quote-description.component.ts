import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() descquotes: any = [];
  @Input() day: any = []
  like = 0;
  dislike = 0;
  popularVotes: number = 0;
  interval: any
  dates: any;
  @Output() deleteQuote = new EventEmitter<boolean>();


  constructor() {

    this.interval = setInterval(() => {
      this.dates = Date.now();
      this.dates = this.dates - this.descquotes.created;

    }, 1000)
  }

  ngOnInit(): void {


  }
  QuoteDeleted(complete: boolean) {
    this.deleteQuote.emit(complete);
  }
  timelapsed(value: any) {


    // return value;
  }


}

