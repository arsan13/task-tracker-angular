import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from '../../servicess/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask!: boolean;
  subscription!: Subscription;

  newTask: Task = {
    text: '',
    day: '',
    reminder: false,
  };

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((flag) => (this.showAddTask = flag));
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.onAddTask.emit(this.newTask);
    f.reset();
  }
}
