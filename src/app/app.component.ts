import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello: string = 'Hello World!';
//this disables/enables typing in the input box; this is property binding
  isDisabled: boolean = true;
//this is an event binding
  onClick() {
    alert("Button has been clicked!");
  }
}
