import { Component } from '@angular/core';
import { AppData } from './app-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ngModel';
  data = new AppData('James', 38);
  name = '';
  setValue() {
    this.name = 'James Waller';
    this.data = new AppData(this.name, 38);
  }
  onSubmit(it: NgForm) {
    console.log(it.value); // { first: '', last: '' }
    console.log(it.valid); // false
  }
}
