import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-input-task',
  template: `
    <input [(ngModel)]="valor" (keydown.enter)="cadastrarTask()" class="input-task" type="text" placeholder="Digite sua nova Task aqui...">
  `,
  styles: [`
  .input-task {
    background-color: #AF7EEB;
    padding: 11px 53px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
    position: relative;
    top: -10px;

  }

  .input-task:focus {
    outline: 0;
  }

  .input-task::placeholder {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
  `]
})
export class InputTaskComponent {
  @Output() public novaTask = new EventEmitter();

  public valor: string = '';

  public cadastrarTask() {
    if(this.valor != '') {
      const task:Task = {
        title: this.valor,
        isChecked: false
      }
  
      this.novaTask.emit(task);
  
      this.valor = '';
    }
  }
}