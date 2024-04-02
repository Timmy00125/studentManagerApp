import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudent().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
