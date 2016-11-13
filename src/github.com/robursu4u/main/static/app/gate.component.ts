
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'gate-component',
  template: `

  <main>

  
  <div>
    <h1 class="greeting_text">Greetings Stranger</h1>
    <h2 class="greeting_message">Welcome to Bobcast Radio,<p></p>a place where nerds flourish</h2>
  </div>

  <div class="button_wrapper">
    <button class="button" (click)="clickEmitEnter($event)">Enter Site</button>
  </div>



  <div class="chrome_container">
    <a href="https://www.google.com/chrome/browser">

      <h3 class="chrome">
        The site works best with Google Chrome web browser. 
        <p></p>
        You may lose functionality on other browsers
      </h3>
      
      <div chrome_img="chrome_img_container"><img src="img/chrome.png" class="chrome_img"></div>

      <h3 class="chrome">
        Click to be directed to Chrome download. 
        <p></p>
        Don't worry, it's safe; it's the internet.
      </h3>
    
    </a>
  </div>
  
  
  </main>
  `,
  styles: [`
    .greeting_text{
      font-family: 'Noir', Verdana, Arial;
      font-size: 120px;
      padding: 20px;
      text-align: center;
      color: #0dba83;
    }
    .greeting_message{
      font-family: 'Noir', Verdana, Arial;
      font-size: 50px;
      text-align: center;
      color: #0dba83;
      padding: 30px;
    }
    .button{
      font-family: 'Noir', Verdana, Arial;
      font-size: 100px;
      color: #272b30;
      border-radius: 30px;
      background-color: #0dba83;
      width: 80%;
    }
    .button_wrapper{
      display: flex;           
      justify-content: center;
      width: 100%;
      padding-bottom: 150px;
    }
    .chrome_container{
      background-color: #22262a;
      border-radius: 30px;
      position: static; 
      bottom: 0;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      width: 40%;
    }
    .chrome{
      font-size: 15px;
      text-align: center;
      color: #0dba83;
    }
    .chrome_img{
      padding-top: 1%;
      width: 8%;
      display: block;
      margin-left: auto;
      margin-right: auto;

    }
  `]

})

export class GateComponent {


  //Declaring onEnterSite as a new EventEmmitter we're sending to Navigation Comp
  //Also declaring what type of info we're sending to NavComp (string) 
  @Output() removeGate = new EventEmitter();


  //Function binded to button. Will trigger when clicked and output new "show_gate" value (display: "none")
  clickEmitEnter(event) {
    this.removeGate.emit(event);
  }

}

