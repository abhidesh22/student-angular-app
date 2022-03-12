import { InjectionToken } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';

import { storageSync } from '@larscom/ngrx-store-storagesync';
//import { AuthActions } from '@core/actions';
import * as fromAuth from './auth.reducer';
import * as fromUniversity from './university-meta.reducer';

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromUniversity.universityMetaFeatureKey]: fromUniversity.State
}

export const reducers = new InjectionToken<ActionReducerMap<State>>(
  'reducers',
  {
    factory: () => ({
      [fromAuth.authFeatureKey]: fromAuth.reducer,
      [fromUniversity.universityMetaFeatureKey]: fromUniversity.reducer
    })
  }
);

export function sessionStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return storageSync<State>({
    features: [
      { stateKey: fromAuth.authFeatureKey },
      { stateKey: fromUniversity.universityMetaFeatureKey }
    ],
    storage: window.sessionStorage
  })(reducer);
}


export const metaReducers: MetaReducer<State>[] = [sessionStorageSyncReducer];
