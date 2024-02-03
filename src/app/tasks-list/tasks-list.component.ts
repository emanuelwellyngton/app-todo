import { Component, DoCheck } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements DoCheck {

  ngDoCheck(): void {
    this.tasks.sort( (first, last) => Number(first.isChecked) - Number(last.isChecked) );
    localStorage.setItem("list", JSON.stringify(this.tasks));
  }
  public tasks: Array<Task> = JSON.parse(localStorage.getItem("list") || "[]");

  public check(task: Task) {
    task.isChecked = !task.isChecked;
  }

  public empurrarNaFila(task: Task) {
    this.deleteTask(task);
    this.tasks.push(task);
  }

  public deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  public deleteAll() {
    const confirm = window.confirm("Tem certeza que deseja deletar todas as tasks?");
    if(confirm) {
      this.tasks = [];
    }
  }

  public cadastrarTask(event: Task) {
    this.tasks.push(event);
  }
}
