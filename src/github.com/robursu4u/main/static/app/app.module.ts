import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HorizontalComponent } from './horizontal.component';
import { LoginComponent } from './login.component';
import { PodcastComponent } from './podcast.component';
import { NavigationComponent } from './navigation.component';
import { WelcomeComponent } from './welcome.component';




@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HorizontalComponent ],
  bootstrap: [ HorizontalComponent ]
})
export class HorizontalModule {}


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ WelcomeComponent ],
  bootstrap: [ WelcomeComponent ]
})
export class WelcomeModule {}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ LoginComponent ],
  bootstrap: [ LoginComponent ]
})
export class LoginModule {}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ PodcastComponent ],
  bootstrap: [ PodcastComponent ],
  //Required for paper audio module I downloaded from github
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PodcastModule {}

@NgModule({
  imports: [ BrowserModule],
  //Declare components for Nav component to recognize other components
  declarations: [ NavigationComponent, HorizontalComponent, LoginComponent, PodcastComponent, WelcomeComponent ],
  bootstrap: [ NavigationComponent ],
 //Need to place "CUSTOM_ELEMENTS_SCHEMA " when PodcastComponent (because paper-audio-player element)
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavigationModule {}
