import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotev';
  items:any=[{quote:"Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
author:"Virginia Woolf",editor:" Hanan Hussein"}];

  AddnewQuote = (obj: any) => {
    console.log(obj);
    this.items.unshift(obj);

  };
}
