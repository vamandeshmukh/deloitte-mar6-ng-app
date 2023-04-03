import { Component } from '@angular/core';
import { DeleteComponent } from './components/delete/delete.component';
import { EmpComponent } from './components/emp/emp.component';

DeleteComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = 'Sonu';
}
