import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appData = { counter: 0 };

  increment() {
    //this.appData.counter++;
    this.appData = { counter: this.appData.counter + 1 };
  }
}
