import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { LoggingInterceptor } from './logging-interceptor';
import { ServiceUnavailableInterceptor } from './service-unavailable-interceptor';

export const interceptorProviders: Provider[] = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceUnavailableInterceptor,
      multi: true
    }
  ];
  