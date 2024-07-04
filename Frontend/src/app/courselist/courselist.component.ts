import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courselist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.scss',
  providers: [ServiceService],
})
export class CourselistComponent {
  courses: any[] = [];

  constructor(private service: ServiceService, private sanckBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.courses = data;
    });
  }

  delete(id: any) {
    this.service.delete(id).subscribe((data) => {
      this.sanckBar.open("Course Deleted Successfully", "OK", {
        duration: 5000
      })
      this.ngOnInit()
    });
  }
}
