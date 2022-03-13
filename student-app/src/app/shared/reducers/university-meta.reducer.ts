import { GradesData } from './../models/grade-data';
import { University } from './../models/university-info';

import { Action, createReducer, on } from '@ngrx/store';
import { Student } from '../models/student-info';
import { UniversityActions } from '../actions';

export const universityMetaFeatureKey = 'university';

export interface State {
  selectedUniversity: University;
  universityList: University[];
  studentPerUniList: Student[];
  studentPerSubjectList: GradesData[];
  graphMode: boolean;
}

export const initialState: State = {
  selectedUniversity: null,
  universityList: [],
  studentPerUniList: [],
  studentPerSubjectList: [],
  graphMode: false
};

const loginReducer = createReducer(
  initialState,
  on(UniversityActions.loadAllUniversitiesSuccess, (state: State, { universityList }) => ({
    ...state,
    universityList
  })),
  on(UniversityActions.loadStudentsPerUniSuccess, (state: State, { studentList }) => ({
    ...state,
    studentPerUniList: studentList
  })),
  on(UniversityActions.loadStudentsPerSubjectSuccess, (state: State, { gradesData }) => ({
    ...state,
    studentPerSubjectList: gradesData
  })),
  on(UniversityActions.UniversitySelectionChange, (state: State, { university }) => ({
    ...state,
    selectedUniversity: university
  })),
  on(UniversityActions.setGraphMode, (state: State, { graphMode }) => ({
    ...state,
    graphMode
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
