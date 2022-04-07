import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() refreshEmitter = new EventEmitter<boolean>();

  tasks: Observable<Array<ITask>>;
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    this.tasks = this.taskService.getTaskList();
  }

  onOpenDialog(task: ITask) {
  }

}
