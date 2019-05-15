import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoomModule } from './pages/room/room.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
