import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Counter = 5;
  show = true;

  toggle() {
    this.show = !(this.show);
  }
}
