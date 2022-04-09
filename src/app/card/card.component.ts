import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() quote = 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.';
  @Input() author = 'Virginia Woolf';
  @Input() editor = 'Jaffar Hussein'

    constructor() { }

ngOnInit(): void {
}

}
