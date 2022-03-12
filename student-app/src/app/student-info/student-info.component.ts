import { selectUniversityList, selectedUniversity, selectStudentsByUniversity, selectGradesBySubject } from './../shared/selectors/university-meta.selectors';
import { StudentApiService } from './../shared/services/student-api.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { University } from '../shared/models/university-info';
import { Observable, take } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromUniversity from '../shared/reducers/university-meta.reducer';
import { UniversityActions } from '../shared/actions';
import { Student } from '../shared/models/student-info';
import { GradesData } from '../shared/models/grade-data';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentInfoComponent implements OnInit {

  studentsByUniversity$: Observable<Student[]>;
  gradesBySubject$:Observable<GradesData[]>;

  universities: University[] = [];
  graphMode: boolean = false;
  selectedUniversity: University = null;
  columns= [
    { header: 'RollNO', field: 'rollno' },
    { header: 'Name', field: 'name' },
    { header: 'Grades', field: 'grade' },
    { header: 'Degree', field: 'degreeEnrolled' },
  ];

  constructor(private studentApiService: StudentApiService,
    private store: Store<fromUniversity.State>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectUniversityList)).pipe(take(1)).subscribe(uniList => {
      this.universities = uniList;
    });
    this.store.pipe(select(selectedUniversity)).subscribe(uni => {
      this.selectedUniversity = uni || this.selectedUniversity;
    });
    this.store.dispatch(UniversityActions.loadAllUniversities());
    this.studentsByUniversity$ = this.store.pipe(select(selectStudentsByUniversity, { selectedUniversity }));
    this.gradesBySubject$ = this.store.pipe(select(selectGradesBySubject, { selectedUniversity }));
  }

  handleSelectionChange(event: any) {
    this.store.dispatch(UniversityActions.UniversitySelectionChange({university: event}));
  }

  handleClearSelection(event: any) {

  }
  toggleGraphMode(mode: boolean) {
    this.graphMode = !this.graphMode;
  }

}
