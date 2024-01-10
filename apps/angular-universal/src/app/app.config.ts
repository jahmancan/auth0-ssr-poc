import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      AuthModule.forRoot({
        ...environment.auth0,
      })
    ),
    provideClientHydration(),
    provideRouter(
        appRoutes,
        ...(environment.production ? [] : [withDebugTracing()])
    ),
  ],
};
