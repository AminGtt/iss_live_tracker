import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import { GroundTrackerComponent } from './components/ground-tracker/ground-tracker.component';
import { SkyTrackerComponent } from './components/sky-tracker/sky-tracker.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {PositionService} from './services/position.service';
import {HttpClientModule} from '@angular/common/http';
import { IssDetailsComponent } from './components/iss-details/iss-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NotFoundViewComponent,
    GroundTrackerComponent,
    SkyTrackerComponent,
    HeaderComponent,
    FooterComponent,
    IssDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYW1pbmdmdWxsc3RhY2siLCJhIjoiY2t0eXFxbmpnMmczdDJ2cWVyZTV0eGpnaSJ9.EvYpqNLAHoxlTK6IZVfkSQ'
    })
  ],
  providers: [PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
