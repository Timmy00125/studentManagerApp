import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/student/add`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(
      `${this.apiServerUrl}/student/update`,
      student
    );
  }
  public deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/student/delete/${studentId}`
    );
  }
}
