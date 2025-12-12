import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})
export class ReservationFromComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});
  isEditMode: boolean = false;

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1)]]
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      let reservation = this.reservationService.getReservation(id);
      if (reservation) { this.reservationForm.patchValue(reservation) };
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.reservationService.updateReservation(id, reservation);
      } else {
        this.reservationService.addReservation(this.reservationForm.value);
      }
      this.router.navigate(['/list']);
    }
  }


}
