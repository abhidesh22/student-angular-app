import { StudentApiService } from './../services/student-api.service';
import { Inject, Injectable } from '@angular/core';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { UniversityActions } from '../actions';
import * as fromUniversity from '../reducers/university-meta.reducer';

@Injectable()
export class UniversityEffects {
  constructor(
    private actions$: Actions,
    private studentApiService: StudentApiService,
    private store: Store<fromUniversity.State>
  ) { }

  loadAllUniversities$ = createEffect(() => this.actions$.pipe(
    ofType(UniversityActions.loadAllUniversities),
    switchMap(({ }) => {
        return this.studentApiService.universityGetApi().pipe(
            map(universityList => {
                return UniversityActions.loadAllUniversitiesSuccess({ universityList })
            }),
            catchError(async () => UniversityActions.loadAllUniversitiesFailure({ error: 'error loading University List' }))
        )
    })
  ));

  UniversitySelectionChange$ = createEffect(() => this.actions$.pipe(
    ofType(UniversityActions.UniversitySelectionChange),
    switchMap(({ university }) => {
        return [
            UniversityActions.loadStudentsPerUni({ university }),
            UniversityActions.loadStudentsPerSubject({ university })
        ]
    }),
    catchError(async (error) => UniversityActions.loadStudentsPerSubjectFailure({ error: 'error loading Student per subject' })))
  );

  loadStudentsPerUni$ = createEffect(() => this.actions$.pipe(
    ofType(UniversityActions.loadStudentsPerUni),
    switchMap(({ university }) => {
        return this.studentApiService.getStudentsbyUniversityApi(university._id).pipe(
            map(studentList => {
                return UniversityActions.loadStudentsPerUniSuccess({ studentList })
            }),
            catchError(async () => UniversityActions.loadStudentsPerUniFailure({ error: 'error loading Student per university' }))
        )
    }),
    catchError(async (error) => UniversityActions.loadStudentsPerUniFailure({ error: 'error loading Student per university' })))
  );

  loadStudentsPerSubject$ = createEffect(() => this.actions$.pipe(
    ofType(UniversityActions.loadStudentsPerSubject),
    switchMap(({ university }) => {
        return this.studentApiService.getStudentsbySubjectsApi(university._id).pipe(
            map(gradesData => {
                return UniversityActions.loadStudentsPerSubjectSuccess({ gradesData })
            }),
            catchError(async () => UniversityActions.loadStudentsPerSubjectFailure({ error: 'error loading Student per university' }))
        )
    }),
    catchError(async (error) => UniversityActions.loadStudentsPerSubjectFailure({ error: 'error loading Student per university' })))
  );

}   
