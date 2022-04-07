import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './task/list/list.component';
import { ChartsComponent } from './charts/charts.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AddComponent } from './task/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './task/show/show.component';


@NgModule({
  declarations: [HomeComponent, 
    ListComponent, 
    ChartsComponent, 
    AddComponent, 
    ShowComponent],
  imports: [
    CommonModule,
    AppRoutingModule, 
    NgxChartsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class ComponentModule { }
