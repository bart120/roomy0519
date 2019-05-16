import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomModule } from './pages/room/room.module';
import { CreateComponent } from './pages/room/create/create.component';
import { ListComponent } from './pages/room/list/list.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    {
        // path: 'rooms', loadChildren: () => RoomModule
        path: 'rooms', children: [
            { path: 'add', component: CreateComponent },
            { path: 'list', component: ListComponent }
        ]
    }
];

