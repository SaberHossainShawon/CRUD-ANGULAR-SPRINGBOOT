import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApiUrl } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  saveData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${baseApiUrl}/course/save`, data);
  }

  findAll(): Observable<any> {
    return this.http.get(`${baseApiUrl}/course/findAll`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseApiUrl}/course/deleteCourse/${id}`);
  }

  findById(id: number): Observable<any> {
    console.log(id)
    return this.http.get(`${baseApiUrl}/course/findById/${id}`);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${baseApiUrl}/course/updateCourse/${id}`, data);
  }
}
