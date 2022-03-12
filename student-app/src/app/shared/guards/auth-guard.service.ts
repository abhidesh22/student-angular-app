import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { selectIsAuthenticated} from '../selectors/auth.selectors';
import * as fromRoot from '../reducers';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

/**
 * This is a sample auth-guard service which utilize a single ngrx state store. It is just for demonstration purpose currently.
 * It will use the selector to get the current state of the user login and returns the observable.
 * TODO: add the complete login functionality with authentication driven by tokens and cookies utilization and then update
 * this service accordingly.
 */
@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<fromRoot.State>) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Use selector here to get the current loggedin state of the user and then generate an observable to return
    // state of the application whether logged in or not
    return this.store.pipe(select(selectIsAuthenticated));
  }
}
