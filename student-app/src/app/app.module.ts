import { UniversityEffects } from './shared/effects/university.effects';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationModule } from './main-navigation/main-navigation.module';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from '../app/shared/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProviders } from './interceptors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainNavigationModule,
    FlexLayoutModule,
    HttpClientModule,
    PanelModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        // strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([UniversityEffects])
  ],
  providers: [ interceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
