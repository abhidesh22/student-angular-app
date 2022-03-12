import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainName'
})

/**
 * This Pipe is used to fetch the domain from the url passed. The Url for the story is passed from components.
 * If the Url is not valid, return ''
 * params : url to parse
 * output : domain name  
 */

export class DomainNamePipe implements PipeTransform {

  transform(url: string | undefined, ...arg: string[]): string {
    if (url) {
        const domain = (new URL(url)).hostname.replace('www.','');
        return `(${domain})`;
    }
    return "";
  }
}