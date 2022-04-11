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
    this.quoteModel = new Quotes("","","",new Date,0,0);
  }

  ngOnInit(): void {
  }
  onSubmit = () => {
    if (this.quoteModel.quote === '' || this.quoteModel.author === '' || this.quoteModel.editor==='') {
      return;
    }
    this.newQuote.emit({ quote: this.quoteModel.quote, author: this.quoteModel.author,editor: this.quoteModel.editor,created:this.quoteModel.createdDate,like:this.quoteModel.upVote,dislike:this.quoteModel.downVote });
    this.quoteModel.author='';
    this.quoteModel.editor='';
    this.quoteModel.quote='';
  };
  
}
