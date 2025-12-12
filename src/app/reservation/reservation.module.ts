import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFromComponent } from '../reservation-from/reservation-from.component';



@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationFromComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
