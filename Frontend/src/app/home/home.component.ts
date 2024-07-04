import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ServiceService]
})
export class HomeComponent {
  constructor(private fb: FormBuilder,
           private service: ServiceService,
            private snackBar: MatSnackBar,
            private router:Router) { }

  courseForm = this.fb.group({
    courseName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    price: ['', Validators.required],
    traineeName: ['', Validators.required],
  });
  onSubmit() {
    if (this.courseForm.valid) {
      const data = this.courseForm.value
      console.log(data)
      this.service.saveData(data).subscribe((data: any) => {   
        this.router.navigate(['/courselist']) 
      })
    }
  }


}
