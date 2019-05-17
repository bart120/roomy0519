import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  obsRoom: Observable<Room>;


  constructor(
    private serv: RoomService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.obsRoom = this.serv.getRoomById(this.route.snapshot.params.id);
  }

}
