import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentDataInChild: string = '';


  @Output()
  childDataInChild = new EventEmitter<string>();

  sendDataFromChildToParent(cdtp: string) {
    console.log(cdtp);
    this.childDataInChild.emit(cdtp);
  };

}
