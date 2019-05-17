import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient) { }

    getTopFive(): Observable<Array<Room>> {
        /* this.http.get<Array<Room>>(environment.urlRoom).subscribe(
            (data) => {
                console.log(data);
                return data;
            }
        );*/
        // return this.http.get<Array<Room>>(environment.urlRoom);
        return timer(0, 10000).pipe(
            mergeMap(() => this.http.get<Array<Room>>(environment.urlRoom)
                .pipe(map(data => data.sort((a, b) => a.name > b.name ? 1 : -1).slice(0, 5))))
        );
        console.log('fin getTopFive');
        return null;
    }

    getRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(environment.urlRoom);
    }
}
