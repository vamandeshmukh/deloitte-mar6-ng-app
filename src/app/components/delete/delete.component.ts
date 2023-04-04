import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {

    someData = 'Sonu';
    shouldBeDisabled = true;
    userName = '';

    enterUserName = (evt: any) => {
        this.userName = evt.target.value;
        console.log(evt.target.value);
    };

    actOnClick = () => {
        console.log('clicked!');
    };

    ngOnInit(): void {
        setTimeout(() => {
            this.shouldBeDisabled = false;
        }, 3000);
    }
}


// lifecycle hooks

// data binding -

// interpolation {{}} - component to template
// property binding []=""  - component to template

// event binding ()="" - template to component
// two-way binding [()]="" - two way

// services in angular
// connect to backend service
// routing in angular

// directives in angular
// decorators in angular
// lifecycle hooks

// testing 
