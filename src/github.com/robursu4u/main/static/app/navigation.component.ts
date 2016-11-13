import { Component } from '@angular/core';

//Custom components
import { HorizontalComponent } from './horizontal.component';
import { LoginComponent } from './login.component';
import { PodcastComponent } from './podcast.component';
import { WelcomeComponent } from './welcome.component';
import { GateComponent } from './gate.component';





//Overall
//2. Email for contacting
//3. Login to work, golang portion nearly complete. Just have to POST with rest REST in angualar to receive info :)
//4. Voting on stuff

// Navbar
//3. Clickable with anchors, scroll animation, etc.

@Component({
  selector: 'navigation-app',
  template: `



<main>

<div class="gate_container" [style.display]="show_gate">
  <gate-component (removeGate)="receiveEvent($event)"></gate-component>
</div>

<div class="nav_container_outside">
  <div class="nav_container_inside">
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <a href="#welcome"><h1 class="nav">Welcome        </h1></a>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <a href="#listen_now"><h1 class="nav">Listen Now  </h1></a>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <a href="#login"><h1 class="nav">Login            </h1></a>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
    <a href="#contact"><h1 class="nav">Contact        </h1></a>
    <horizontal-separator class="nav_horizontal"></horizontal-separator>
  </div>
</div>

<div class="everything_else_container">
  <div class="horizontal_main_page"><horizontal-separator></horizontal-separator></div>

  <a name="welcome"><div class="welcome_container"><welcome-component></welcome-component></div></a>

  <div class="horizontal_main_page"><horizontal-separator></horizontal-separator></div>

  <a name="listen_now"><podcast-list></podcast-list></a>

  <div class="horizontal_main_page"><horizontal-separator></horizontal-separator></div>
  
  <a name="login"><login-module></login-module></a>

  <div class="horizontal_main_page"><horizontal-separator></horizontal-separator></div>
</div>

</main>
  `,
  styles: [`
    a{
      text-decoration: none;
    }
    .gate_container{
      height: 100%; 
      width: 100%;
      position: fixed;
      z-index: 3;
      background: rgba(0, 0, 0, 0.88);
      left: 0;
      top: 0;
    }
    .nav_container_outside{
      border-right-style: groove;
      border-color: #0dba83;
      border-width: 10px;
      height: 100%; 
      position: fixed; 
      z-index: 1;
      top: 0;
      left: 0;
      width: 200px;
      padding-left: 10px;
      padding-right: 10px;
      background-color: #272b30;
    }
    .nav_container_inside{
      position: fixed;
      height: 100%;
      padding-left: 10px;
      padding-right: 10px;
      left: 0; 
      top: 20%;
    }
    .everything_else_container{
      position: absolute;
      width: 60%;
      top: 0;
      left: 200px;
      padding-left: 60px;
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
      padding-bottom: 50px;
      position: relative;
      left: 0;
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
      width: 100%;
      z-index: 1;
      top: 0;
      left: 0;
    }
  `]
})

export class NavigationComponent {
  //Initialize css show in display option
  show_gate = "none";

  receiveEvent(event) {
    this.show_gate = "none";
    return this.show_gate;
  }

}

