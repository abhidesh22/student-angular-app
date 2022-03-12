import { PanelModule } from 'primeng/panel';
import { DomainNamePipe } from './pipes/domain-name.pipe';
import { StudentApiService } from './services/student-api.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { MatDividerModule } from '@angular/material/divider';
import {DividerModule} from 'primeng/divider';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { DataTableComponent } from './components/data-table/data-table.component';
import { GraphReportComponent } from './components/graph-report/graph-report.component';
import {TableModule} from 'primeng/table';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DomainNamePipe,
    ConvertTimePipe,
    DataTableComponent,
    GraphReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    DividerModule,
    InputTextareaModule,
    ButtonModule,
    PanelModule,
    TableModule,
    NgChartsModule
  ],
  exports: [
    DomainNamePipe,
    ConvertTimePipe,
    DataTableComponent,
    GraphReportComponent
  ],
  providers: [
    StudentApiService
  ]
})
export class SharedModule { }
