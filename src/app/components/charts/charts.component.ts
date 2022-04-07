import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { TaskService } from 'src/app/services/task.service';
import { ITypePercentage } from '../../interface/task.interface';
import { ITask } from 'src/app/interface/task.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit  {

  single: any [];
  view: any[];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  public legendPosition: LegendPosition = LegendPosition.Below;
  colorScheme: Color = { domain: ['#00C3A1', '#C35300', '#0092C3', '#C30058'], group: ScaleType.Quantile, selectable: true, name: 'Customer Usage', };


    constructor(private taskService: TaskService) {}
  
    ngOnInit(): void {
      this.getTypePercentage();
    
    }
    getTypePercentage() {
      this.taskService.getTypePercentage()
      .subscribe(d => {
        console.log(d);
            this.single = d.map(data => ({name: data.type, value: data.count}));
          });


    }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
  refreshEmitter() {
    this.getTypePercentage();
  }
}
