import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    user: User;

    constructor(
        private auth: AuthenticationService,
        private snack: MatSnackBar) {
        this.auth.user.subscribe(
            data => this.user = data
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.user != null) {
            return true;
        } else {
            this.snack.open("Vous n'avez pas accès à cette page", 'ok', {duration: 3000});
            return false;
        }
    }
}
