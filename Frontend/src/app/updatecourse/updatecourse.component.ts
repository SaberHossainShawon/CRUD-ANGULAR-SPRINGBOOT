import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatecourse',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './updatecourse.component.html',
  styleUrl: './updatecourse.component.scss',
  providers: [ServiceService]
})
export class UpdatecourseComponent {

  
  constructor(private fb: FormBuilder, 
    private router:Router,
    private service: ServiceService,
    private snackBar: MatSnackBar,
    private activerouter: ActivatedRoute
  ) {}
  id: any = this.activerouter.snapshot.params['id']
 courseForm!:FormGroup;

  ngOnInit(): void {
   this. courseForm = this.fb.group({
      courseName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      price: ['', Validators.required],
      traineeName: ['', Validators.required],
  
    });
    this.getCourseById()
  }

  getCourseById() {
    
    this.service.findById(this.id).subscribe((data) => {
       this.courseForm.patchValue(data);
      console.log(data)
      
    })
  }



  

  onSubmit(): void {   
    if (this.courseForm.valid) {
      const data = this.courseForm.value
      console.log(data)
      this.service.update(this.id,data).subscribe((data: any) => {
        this.snackBar.open("Course Updated Successfully", "OK", {
          duration: 5000
        })
        this.router.navigate(['/courselist'])
      })
    }
  }
}
