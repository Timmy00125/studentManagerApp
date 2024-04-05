import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule],
  providers: [StudentService],
  bootstrap: [],
})
export class AppModule {}
