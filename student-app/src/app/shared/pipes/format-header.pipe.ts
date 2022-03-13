import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHeader'
})

/**
 * This Pipe is used to covert the unix timestamp into a fromNow format. Moment is used for formatting.
 * params : unix timestamp to convert
 * output : formatted time string
 */

export class FormatHeaderPipe implements PipeTransform {

  transform(headerValue: string | undefined, ...args: unknown[]): string {
    if(headerValue) {
      return headerValue.trim().toUpperCase();
    }
    return '';
  }

}
