import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpEventType,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { tap, finalize } from 'rxjs/operators';
  
/**
 * This interceptor will be used to log the data as per the settings provided in the environment file.
 * Currently, only the skeleton is built and logger functionality needs to be added.
 * The log level will be provided from environment based on build whether prod or dev
 * All http requests can be logged based on the requirement.
 * 
 */
  @Injectable()
  export class LoggingInterceptor implements HttpInterceptor {
    constructor( ) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const startTime = Date.now();
      let statusCode: number;
  
      return next.handle(req).pipe(
        tap(
          event => {
            if (event.type === HttpEventType.Response) {
              statusCode = event.status;
            }
          },
          error => {
            if (error instanceof HttpErrorResponse) {
              statusCode = error.status;
            }
          }
        ),
        finalize(() => {
          this.log(req, statusCode, startTime);
        })
      );
    }
  
    private log(req: HttpRequest<any>, statusCode: number, startTime: number): void {
      const success = statusCode >= 200 && statusCode < 300;
  
      const logMessage = {
        method: req.method,
        url: req.urlWithParams,
        body: req,
        success,
        statusCode,
        ms: Date.now() - startTime
      };
  
      if (success) {
        // add success message to logger
      } else {
        // add error message to logger
      }
    }
  }
  