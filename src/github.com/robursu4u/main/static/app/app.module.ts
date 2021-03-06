import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HorizontalComponent } from './horizontal.component';
import { LoginComponent } from './login.component';
import { PodcastComponent } from './podcast.component';
import { NavigationComponent } from './navigation.component';
import { WelcomeComponent } from './welcome.component';
import { GateComponent } from './gate.component';




@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HorizontalComponent ],
  bootstrap: [ HorizontalComponent ]
})
export class HorizontalModule {}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ GateComponent ],
  bootstrap: [ GateComponent ]
})
export class GateModule {}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ WelcomeComponent ],
  bootstrap: [ WelcomeComponent ]
})
export class WelcomeModule {}

@NgModule({
  imports: [ BrowserModule ], //Import Http and Jsonp Module for REST service used in login component
  declarations: [ LoginComponent ],
  providers: [ CookieService ],
  bootstrap: [ LoginComponent ]

})
export class LoginModule {}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ PodcastComponent ],
  bootstrap: [ PodcastComponent ],
  //Required for paper-audio-module
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PodcastModule {}

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  //Declare components for Nav component to recognize other components
  declarations: [ NavigationComponent, HorizontalComponent, LoginComponent, PodcastComponent, WelcomeComponent, GateComponent ],
  providers: [ CookieService ],
  bootstrap: [ NavigationComponent ],
 //Need to place "CUSTOM_ELEMENTS_SCHEMA " when using PodcastComponent (because paper-audio-player element)
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavigationModule {}

