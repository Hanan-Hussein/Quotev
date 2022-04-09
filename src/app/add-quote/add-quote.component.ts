import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  quoteModel: Quotes
  authorParam=''
  editorParam='';
  quoteParam='';

  @Output() newQuote = new EventEmitter();
  constructor() {
    this.quoteModel = new Quotes("","","");
  }

  ngOnInit(): void {
  }
  SubmitBtn = () => {
    if (this.quoteModel.quote === '' || this.quoteModel.author === '' || this.quoteModel.editor==='') {
      return;
    }
    this.newQuote.emit({ name: this.quoteModel.quote, img: this.quoteModel.author });

  };
  
}
