import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomModule } from './pages/room/room.module';
import { CreateComponent } from './pages/room/create/create.component';
import { ListComponent } from './pages/room/list/list.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { DetailComponent } from './pages/room/detail/detail.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },
    {
        // path: 'rooms', loadChildren: () => RoomModule
        path: 'rooms', children: [
            { path: 'add', component: CreateComponent, canActivate: [AuthenticationGuard] },
            { path: 'list', component: ListComponent },
            { path: 'detail/:id', component: DetailComponent }
        ]
    },
    {
        path: 'auth', children: [
            { path: 'login', component: LoginComponent }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'notfound' }
];

