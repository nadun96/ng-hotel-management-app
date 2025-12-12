import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})
export class ReservationFromComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    console.log(this.reservationForm.valid);
  }

}
