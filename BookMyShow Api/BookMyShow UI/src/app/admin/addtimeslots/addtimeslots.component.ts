import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-addtimeslots',
  templateUrl: './addtimeslots.component.html',
})
export class AddtimeslotsComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private movieService: MovieService,
    private fb: FormBuilder
  ) {}
  timeSlotForm!: FormGroup;

  isEnabled = true;
  endTimeMin: any;
  ngOnInit(): void {
    this.initializeTimeSlotForm();
  }
  initializeTimeSlotForm() {
    this.timeSlotForm = this.fb.group(
      {
        starttime: ['', Validators.required],
        endtime: ['', Validators.required],
      },
      {
        validator: this.timeValidator('starttime', 'endtime'),
      }
    );
  }

  timeValidator(starttime: string, endtime: string) {
    return (formGroup: FormGroup) => {
      const starttimeControl = formGroup.controls[starttime];
      const endtimeControl = formGroup.controls[endtime];
      if (starttimeControl.value > endtimeControl.value) {
        endtimeControl.setErrors({ endtimeError: true });
      } else {
        endtimeControl.setErrors(null);
      }
    };
  }

  get formControls() {
    return this.timeSlotForm.controls;
  }

  onSubmit() {
    this.movieService.postTimeSlot(this.timeSlotForm.value).subscribe((res) => {
      this.toastr.success('Successfully Added TimeSlot');
    });
    this.initializeTimeSlotForm();
  }
}
