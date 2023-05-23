import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = ['Lab09: Desarrollo Web Avanzado', 'Lab09: Apicaciones Multiplataforma', 'Lab10: Desarrollo de Soluciones en la nube'];
}
