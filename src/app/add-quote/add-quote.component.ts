import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  day:any;
  interval:any
  @Output() newQuote = new EventEmitter();
  constructor() {
    this.interval = setInterval(() => {
      this.day = Date.now();

    }, 1000)
    this.quoteModel = new Quotes("","","",new Date(this.day),0,0);
  }

  ngOnInit(): void {
  }
  onSubmit = (loginForm:any) => {
    if (this.quoteModel.quote === '' || this.quoteModel.author === '' || this.quoteModel.editor==='') {
      return;
    } 
    this.newQuote.emit({ quote: this.quoteModel.quote, 
      author: this.quoteModel.author,
      editor: this.quoteModel.editor,
      created:this.quoteModel.createdDate,
      like:this.quoteModel.upVote,
      dislike:this.quoteModel.downVote });

    loginForm.form.reset();

  };
  
}
