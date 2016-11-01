import { Component } from '@angular/core';

//Custom components
import { HorizontalComponent } from './horizontal.component';
import { LoginComponent } from './login.component';
import { PodcastComponent } from './podcast.component';
import { WelcomeComponent } from './welcome.component';




//Overall
//1. Display dialogue to use chrome.  
//2. Email for contacting
//3. Login to work, gonna be awhile to get this to work...
//4. Voting on stuff

// Navbar
//3. Clickable with anchors, scroll animation...

//Audio comp
//1. Player height: taller
//2. Volume on player

@Component({
  selector: 'navigation-app',
  template: `


<main>

<div class="nav_container">
  <h1 class="nav">Welcome</h1>
  <horizontal-separator class="nav_horizontal"></horizontal-separator>
  <h1 class="nav">Listen Now</h1>
  <horizontal-separator class="nav_horizontal"></horizontal-separator>
  <h1 class="nav">Login</h1>
  <horizontal-separator class="nav_horizontal"></horizontal-separator>
  <h1 class="nav">Contact</h1>
  <horizontal-separator class="nav_horizontal"></horizontal-separator>
</div>


<div class="everything_else_container">

  <div class="welcome_container"><welcome-component></welcome-component></div>

  <div class="horizontal_main_page"><horizontal-separator></horizontal-separator></div>

  <podcast-list></podcast-list>

  <div class="horizontal_main_page"><horizontal-separator></horizontal-separator></div>
  
  <login-module></login-module>


</div>

</main>
  `,
  styles: [`
    .nav_container{
      border-right-style: groove;
      border-color: #0dba83;
      border-width: 10px;
      height: 100%; 
      position: fixed; 
      z-index: 1;
      top: 10%;
      left: 0;
      padding-left: 10px;
      padding-right: 10px;
      background-color: #272b30;

    }
    .nav{
      font-family: 'Noir', Verdana, Arial;
      padding-top: 15px;
      padding-bottom: 5px;
    }
    .welcome_container{
      position: relative;
      padding-top: 10%;
    }
    .horizontal_main_page{
      padding-top: 70px;
      padding-bottom: 70px;
    }
    .nav_horizontal{
      position: relative;
      right: 53%;
    }
    .everything_else_container{
      z-index: -1;
      float: right;
      padding: 40px;
      width: 100%;
    }
    .audio_class{
      border-bottom: solid;
      border-width: 8px;
      border-color: #0dba83;
      position: fixed;
      width: 100%;
      background-color: #272b30;
      position: fixed; 
      z-index: 1;
      top: 0;
      left: 0;

    }
  `]
})

export class NavigationComponent {}

