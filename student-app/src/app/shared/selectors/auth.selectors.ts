import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectUser = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.user
);

export const selectUsername = createSelector(
  selectUser,
  (user: string) => { return user || '' }
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.isAuthenticated
);