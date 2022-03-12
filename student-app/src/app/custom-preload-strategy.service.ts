import { Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { PreloadingStrategy } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CustomPreloadStrategyService implements PreloadingStrategy {
  constructor() {}
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const loadRoute = (delay: number) =>
      delay > 0 ? timer(delay * 1000).pipe(map(() => fn())) : fn();
    if (route.data && route.data["preload"]) {
      const delay = route.data["loadAfterSeconds"]
        ? route.data["loadAfterSeconds"]
        : 0;
      return loadRoute(delay);
    }
    return of(null);
  }
}
