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

<<<<<<< HEAD
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
=======
<div class="nav_container_outside">
  <div class="nav_containter_inside">
    <h1 class="nav">Welcome</h1>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <h1 class="nav">Listen Now</h1>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <h1 class="nav">Login</h1>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <h1 class="nav">Contact</h1>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
  </div>
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
    .nav_container_outside{
>>>>>>> bba013f1b0b22390feb8cad49c4be785d98e26e3
      border-right-style: groove;
      border-color: #0dba83;
      border-width: 10px;
      height: 100%; 
      position: fixed; 
      z-index: 1;
<<<<<<< HEAD
      top: 10%;
      left: 0;
      width: 12%;
      padding-left: 10px;
      padding-right: 10px;
      background-color: #272b30;
    }
    .everything_else_container{
      position: relative;
      padding: 40px;
      width: 100%;
=======
      top: 0;
      left: 0;
      margin-right: 40px;
      padding-left: 10px;
      background-color: #272b30;
    }
    .nav_containter_inside {
      position: relative;
      margin-right: 40px; 
      top: 15%;
    }
    .everything_else_container{
      position: absolute;
      left: 280px;
      width: 60%;
>>>>>>> bba013f1b0b22390feb8cad49c4be785d98e26e3
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
<<<<<<< HEAD
=======
      position: relative;
      left: 0;
>>>>>>> bba013f1b0b22390feb8cad49c4be785d98e26e3
    }
    .nav_horizontal{
      position: relative;
      right: 53%;
    }
    .audio_class{
      border-bottom: solid;
      border-width: 8px;
      border-color: #0dba83;
      position: fixed;
      left: 0;
<<<<<<< HEAD
      width: 98%;
=======
      width: 96%;
>>>>>>> bba013f1b0b22390feb8cad49c4be785d98e26e3
      background-color: #272b30;
      z-index: 1;
      top: 0;
      left: 0;

    }
  `]
})

export class NavigationComponent {}
