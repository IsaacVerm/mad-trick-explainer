import { Component } from '@angular/core';
import { magicians } from './magicians'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  magicians = magicians;
}
