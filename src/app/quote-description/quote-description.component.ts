import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {
  @Input() descauthor = 'Virginia Woolf';
  @Input() desceditor = 'Jaffar Hussein'
  constructor() { }

  ngOnInit(): void {
  }

}
