import { GradesData } from './../models/grade-data';
import { Student } from './../models/student-info';
import { University } from './../models/university-info';
import { createAction, props } from '@ngrx/store';


export const UniversitySelectionChange = createAction(
  'University Selection Change',
  props<{ university: University }>()
);

export const loadAllUniversities = createAction(
    'Load All Univerisities'
);

export const loadAllUniversitiesSuccess = createAction(
    'Load All Univerisities Success',
    props<{ universityList: University[] }>()
);

export const loadAllUniversitiesFailure = createAction(
    'Load All Univerisities Failure',
    props<{ error: string }>()
);

export const loadStudentsPerUni = createAction(
    'Load Students Per University',
    props<{ university: University }>()
);

export const loadStudentsPerUniSuccess = createAction(
    'Load Students Per University Success',
    props<{ studentList: Student[] }>()
);

export const loadStudentsPerUniFailure = createAction(
    'Load Students Per University Failure',
    props<{ error: string }>()
);

export const loadStudentsPerSubject = createAction(
    'Load Students Per Subject',
    props<{ university: University }>()
);

export const loadStudentsPerSubjectSuccess = createAction(
    'Load Students Per Subject Success',
    props<{ gradesData: GradesData[] }>()
);

export const loadStudentsPerSubjectFailure = createAction(
    'Load Students Per Subject Failure',
    props<{ error: string }>()
);

export const setGraphMode = createAction(
    'Set Graph Mode',
    props<{ graphMode: boolean }>()
);