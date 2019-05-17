import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    user: User;

    constructor(private auth: AuthenticationService) {
        this.auth.user.subscribe(
            data => this.user = data
        );
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.user != null) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${this.user.token}` }
            });
        }


        return next.handle(req);
    }

}
