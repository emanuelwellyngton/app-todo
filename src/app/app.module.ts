import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { InputTaskComponent } from './input-task/input-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksListComponent,
    InputTaskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
