import { Component } from '@angular/core';

export class MyClass {

  private v1;
  private v2;

  constructor(obj: {s1, s2}) {
    this.v1 = obj.s1;
    this.v2 = obj.s2;
   }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = `Angular 5 App`;
  o1 = new MyClass( {'s1': 1, 's2': 2} );
}
