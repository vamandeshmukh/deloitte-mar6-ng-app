import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {

    ngOnInit(): void {
        setTimeout(() => {
            this.shouldBeDisabled = false;
        }, 3000);
    }

    someData = 'Sonu';
    shouldBeDisabled = true;

}


// lifecycle hooks

// data binding -

// interpolation {{}} - component to template
// property binding []=""  - component to template

// event binding - template to component

// two -way  binding - two way 


