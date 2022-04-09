import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotev';
  items:any=[];

  AddnewQuote = (obj: any) => {
    console.log(obj);
    this.items.push(obj);

  };
}
