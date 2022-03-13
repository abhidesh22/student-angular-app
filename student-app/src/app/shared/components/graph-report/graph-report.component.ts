import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GradesData } from '../../models/grade-data';
import { Student } from '../../models/student-info';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-graph-report',
  templateUrl: './graph-report.component.html',
  styleUrls: ['./graph-report.component.scss']
})
export class GraphReportComponent implements OnInit {
  _gradesData: GradesData[];

  @Input() studentData: Student[];
  @Input() columnHeaders: any[];
  @Input() selectedUniversityName: string;

  @Input() set gradesData(grades: GradesData[]) {
    this.barChartData = {
      labels: grades.map((grades) => grades.course_name[0]),
      datasets: [
        { data: grades.map((grades) => grades.averageGrade), label: 'Average Grades' }
      ]
    };
    this._gradesData = grades;
  }
  get gradesData() {
    return this._gradesData;
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  barChartType: ChartType = 'bar';


  barChartData: ChartData<'bar'>;

  constructor() { }


  ngOnInit(): void {
    this.barChartData = {
      labels: this.gradesData?.map((grades) => grades.course_name[0]),
      datasets: [
        { data: this.gradesData?.map((grades) => grades.averageGrade), label: 'Average Grades' }
      ]
    };
  }

  downloadPdfReport(): void {
    var doc = new jsPDF('l', 'mm',[210, 297]);
    const element = document.getElementById("barChart");

    html2canvas(element).then(canvas => {
        var imgData = canvas.toDataURL('image/png',1.0);                  
        doc.text(` Student Report for ${this.selectedUniversityName}`, 130,15);
        doc.addImage(imgData, 'PNG',20,30,0,130); 
        const headers = [["Student ID", "Name", "Grade", "Subject"]];
        let content = {
            startY: 450,
            head: headers,
            body: this.studentData.map(elt=> [elt.rollno, elt.name, elt.grade, elt.degreeEnrolled])
          };
        autoTable(doc, content);
        doc.save('student_report.pdf');             
    })
  }

}
