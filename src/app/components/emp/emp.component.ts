import { Component } from '@angular/core';

@Component({
    selector: 'app-emp',
    // template: '<p>Emp component works!</p> ',
    templateUrl: './emp.component.html'
})
export class EmpComponent {

    empData = {
        firstName: 'Sonu',
        salary: 95000,
    };

}

