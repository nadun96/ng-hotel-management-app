import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFromComponent } from '../reservation-from/reservation-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationFromComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule,
    MaterialModule
  ]
})
export class ReservationModule { }
