import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor() {
        this.updateUser(JSON.parse(sessionStorage.getItem('USER')));
    }

    get user(): Observable<User> {
        return this.subject.asObservable();
    }

    updateUser(user: User): void {
        if (user == null) {
            sessionStorage.removeItem('USER');
        } else {
            sessionStorage.setItem('USER', JSON.stringify(user));
        }
        this.subject.next(user);
    }
}
