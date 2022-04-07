import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from '../../../services/task.service';
import { ShowComponent } from '../show/show.component';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() refreshEmitter = new EventEmitter<boolean>();
  matTabLabels=["all", "todo", "doing", "done", "on hold"];
  tasks:  Observable<Array<ITask>>;
  allTasks:  Observable<Array<ITask>>;
  constructor(private taskService: TaskService, public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getTasks();

  }
 
  getTasks() {
    this.tasks = this.taskService.getTaskList();
    this.allTasks = this.tasks;
  }

  onOpenDialog(task: ITask) {
    const dialogRef = this.dialog.open(ShowComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
      this.refreshEmitter.emit(true);
      window.location.reload();
    });
  }
  tabChanged(event: any) {
    console.log(event);
    if (event.index != 0) {
      const filterText = event.tab.textLabel;
      
      this.tasks = this.taskService.getTaskList().pipe(map(tasks => tasks.filter(task => task.type === filterText))); 
      console.log(this.tasks);

    } else { this.getTasks();}
    }
  
}