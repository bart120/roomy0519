import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  rooms: Array<Room>;

  //  private serv: RoomService;
  constructor(private serv: RoomService) {
    //  this.serv = serv;  
  }

  ngOnInit() {
    this.serv.getTopFive().subscribe(
      (data) => this.rooms = data
    );

    // this.rooms = this.serv.getTopFive(); 
    /* [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' }
    ];*/
  }

}
