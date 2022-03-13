import { 
  selectUniversityList,
  selectedUniversity, 
  selectStudentsByUniversity, 
  selectGradesBySubject, 
  selectgraphMode 
} from './../shared/selectors/university-meta.selectors';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { University } from '../shared/models/university-info';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromUniversity from '../shared/reducers/university-meta.reducer';
import { UniversityActions } from '../shared/actions';
import { Student } from '../shared/models/student-info';
import { GradesData } from '../shared/models/grade-data';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentInfoComponent implements OnInit {

  studentsByUniversity$: Observable<Student[]>;
  gradesBySubject$:Observable<GradesData[]>;

  universities: University[];
  graphMode: boolean = false;
  selectedUniversity: University = null;
  columns= [
    { header: 'RollNO', field: 'rollno' },
    { header: 'Name', field: 'name' },
    { header: 'Grades', field: 'grade' },
    { header: 'Degree', field: 'degreeEnrolled' },
  ];

  constructor(private store: Store<fromUniversity.State>,
    private SpinnerService: NgxSpinnerService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this.SpinnerService.show();
      this.store.pipe(select(selectUniversityList)).subscribe(uniList => {

        this.universities = this.universities || uniList;
        setTimeout(() => {
          this.SpinnerService.hide();
          this.cdr.detectChanges();
        }, 500);
      });

      this.store.pipe(select(selectedUniversity)).subscribe(uni => {
      this.selectedUniversity = uni || this.selectedUniversity;
    });

    this.store.pipe(select(selectgraphMode)).subscribe(mode => {
      this.graphMode = mode;
    });


    this.studentsByUniversity$ = this.store.pipe(select(selectStudentsByUniversity, { selectedUniversity }));
    this.gradesBySubject$ = this.store.pipe(select(selectGradesBySubject, { selectedUniversity }));

  }

  handleSelectionChange(event: any) {
    this.store.dispatch(UniversityActions.UniversitySelectionChange({university: event}));
  }

  handleClearSelection(event: any) {
    this.store.dispatch(UniversityActions.UniversitySelectionChange({university: null}));
  }
  toggleGraphMode(mode: boolean) {
    this.graphMode = !this.graphMode;
    this.store.dispatch(UniversityActions.setGraphMode({graphMode: this.graphMode}));
  }

}
