import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [`
    .ng-invalid:not(form){
      border-left: 1px red solid;
    }
  `]
})
export class CreateComponent implements OnInit {

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required, this.nameValidator]),
    price: new FormControl('', [Validators.min(0), Validators.pattern(/^[0-9]*$/)])
  });

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.formRoom);
  }

  nameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value == 'aa') {
      return null;
    }
    return { name: false };

  }

}
