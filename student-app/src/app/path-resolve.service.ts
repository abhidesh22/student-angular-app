import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import dsc from 'dice-similarity-coeff';

import { paths } from './app-paths';

@Injectable({
  providedIn: 'root'
})
export class PathResolveService implements Resolve<string | null> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | null {
    const pathToResolve = state.url.replace('/', '');
    const pathSimilarityPercentages = Object.values(paths)
              .map(path => {
                return { path, percent: dsc.twoStrings(pathToResolve, path) };
              })
              .sort((item1, item2) => item1.percent > item2.percent ? -1 : 1);
    // The similarity array is sorted descending according to the similarity percentage, so
    // after the sort the first element in the array should be the most similar one, therefore,
    // if the percentage of the first element is zero then there was no similarity at all and
    // then we return null as we don't have good suggestion for the user, otherwise, return the first element.
    return pathSimilarityPercentages[0].percent > 0 ? `/${pathSimilarityPercentages[0].path}` : null;
  }
}