import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TasksService } from '../../servicess/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.tasksService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((item) => item.id !== task.id))
      );
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.updateTask(task).subscribe();
  }
}
