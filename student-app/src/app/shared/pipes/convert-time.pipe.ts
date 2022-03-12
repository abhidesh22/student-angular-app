import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'convertTime'
})

/**
 * This Pipe is used to covert the unix timestamp into a fromNow format. Moment is used for formatting.
 * params : unix timestamp to convert
 * output : formatted time string
 */

export class ConvertTimePipe implements PipeTransform {

  transform(timeValue: number | undefined, ...args: unknown[]): string {
    if(timeValue) {
      return moment(timeValue * 1000).fromNow();
    }
    return '';
  }

}
