import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    TopFiveComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
