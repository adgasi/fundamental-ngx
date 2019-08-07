import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fd-input-group-only-form-example',
    templateUrl: './input-group-only-form-example.component.html'
})
export class InputGroupOnlyFormExampleComponent {
    customForm = new FormGroup({
        input: new FormControl('')
    });
};
