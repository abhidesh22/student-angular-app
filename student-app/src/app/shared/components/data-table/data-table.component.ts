import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student-info';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() studentData: Student[];
  @Input() columnHeaders: any[];
  constructor() { }

  ngOnInit(): void {
  }

  exportPdf() {
    const doc = new jsPDF('l', 'mm',[210, 297]);
    let content = {
        head: [["Student ID", "Name", "Grade", "Degree"]],
        body: this.studentData.map(elt=> [elt.rollno, elt.name, elt.grade, elt.degreeEnrolled])
      };
    autoTable(doc, content);
    doc.save('student_data.pdf');
  }

}
