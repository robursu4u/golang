import { Component } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';

// Add the RxJS Observable operators. For REST service. May not be necessary.
//import './rxjs-operators';

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
  styleUrls: ['app/css/navigation.component.css']
})

export class NavigationComponent {
  //Initialize css 'show' in display option
  show_gate = "none";

  receiveEvent(event) {
    this.show_gate = "none";
    return this.show_gate;
  }



}

