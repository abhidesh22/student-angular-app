import { PanelModule } from 'primeng/panel';
import { StudentApiService } from './services/student-api.service';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FormatHeaderPipe } from './pipes/format-header.pipe';
import { MatDividerModule } from '@angular/material/divider';
import {DividerModule} from 'primeng/divider';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { DataTableComponent } from './components/data-table/data-table.component';
import { GraphReportComponent } from './components/graph-report/graph-report.component';
import {TableModule} from 'primeng/table';
import { NgChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [
    FormatHeaderPipe,
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
    NgChartsModule,
    NgxSpinnerModule,
    TooltipModule
  ],
  exports: [
    FormatHeaderPipe,
    DataTableComponent,
    GraphReportComponent,
    NgxSpinnerModule,
    TableModule
  ],
  providers: [
    StudentApiService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
