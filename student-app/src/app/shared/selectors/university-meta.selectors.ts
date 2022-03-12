import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUniversity from '../reducers/university-meta.reducer';

export const selectUniversityState = createFeatureSelector<fromUniversity.State>(
  fromUniversity.universityMetaFeatureKey
);

export const selectedUniversity = createSelector(
  selectUniversityState,
  (state: fromUniversity.State) => state.selectedUniversity
);

export const selectedUniversityName = createSelector(
    selectUniversityState,
    (state: fromUniversity.State) => state.selectedUniversity.name
);

export const selectUniversityList = createSelector(
    selectUniversityState,
    (state: fromUniversity.State) => state.universityList
);

export const selectStudentsByUniversity = createSelector(
  selectUniversityState,
  (state: fromUniversity.State) => state.studentPerUniList
);

export const selectGradesBySubject = createSelector(
  selectUniversityState,
  (state: fromUniversity.State) => state.studentPerSubjectList
);
