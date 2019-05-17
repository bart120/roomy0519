import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  rooms: Array<Room>;
  cols: Array<string> = ['name', 'price'];

  constructor(private serv: RoomService) { }

  ngOnInit() {
    this.serv.getRooms().subscribe(
      data => this.rooms = data
    );
  }

}
