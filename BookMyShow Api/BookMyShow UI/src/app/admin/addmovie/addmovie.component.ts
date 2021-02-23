import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { MovieService } from '../../shared/services/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
})
export class AddmovieComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private toastr: ToastrService
  ) {}
  movieForm: any;
  timeSlots: any;
  ngOnInit(): void {
    this.initializeMovieForm();
    this.movieService.getTimeSlots().subscribe((res) => {
      this.timeSlots = res;
    });
  }

  initializeMovieForm() {
    this.movieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      producer: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      casts: new FormArray([]),
      genre: new FormControl('', Validators.required),
      timeslotid: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      imageSource: new FormControl('', [Validators.required]),
    });
  }

  get casts() {
    return this.movieForm.get('casts') as FormArray;
  }
  get formControls() {
    return this.movieForm.controls;
  }
  imageSrc: any;

  onImageChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.movieForm.patchValue({
          imageSource: reader.result,
        });
      };
    }
  }

  addCast() {
    this.casts.push(
      new FormGroup({
        castname: new FormControl('', Validators.required),
      })
    );
  }

  onSubmit() {
    this.movieService.postMovie(this.movieForm.value).subscribe((res) => {
      this.toastr.success('Successfully Added');
      this.initializeMovieForm();
    });
  }
}
