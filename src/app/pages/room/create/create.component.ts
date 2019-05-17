import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

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
    name: new FormControl('', [Validators.required/*, this.nameValidator*/]),
    price: new FormControl('', [Validators.min(0), Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('', [Validators.min(0), Validators.pattern(/^[0-9]*$/)]),
    image: new FormControl('', Validators.required)
  });

  pictures: Array<any> = [
    { id: 'Pegase.jpg', image: 'Image pegase' },
    { id: 'Calliope.jpg', image: 'Image Calliope' },
    { id: 'Thalie.jpg', image: 'Image Thalie' }
  ];

  constructor(private serv: RoomService) { }

  ngOnInit() {
  }

  submit(): void {
    if (this.formRoom.valid) {
      this.serv.addRoom(this.formRoom.value as Room).subscribe(
        data => alert(`Salle ${data.name} créée avec l'id ${data.id}`)
      );
    }
  }

  nameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value == 'aa') {
      return null;
    }
    return { name: false };

  }

}
