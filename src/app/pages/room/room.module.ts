import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    TopFiveComponent,
    CreateComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
