import { Component } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  public tasks: Array<Task> = [{title: 'Comprar pão', isChecked: false}, {title: 'Fazer ioga', isChecked: false}];

  public isChecked: boolean = false;

  public check(task: Task) {
    task.isChecked = !task.isChecked;
    if(task.isChecked == true) {
      this.empurrarNaFila(task);
    }
  }

  public empurrarNaFila(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.tasks.push(task);
  }

  public cadastrarTask(event: Task) {
    this.tasks.push(event);
  }
}
