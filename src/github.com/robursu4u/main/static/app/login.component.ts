import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';


// Import RxJs required methods. Used in http.get method in getInfo
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
//Observable used to "observe" variables retreived for sent over REST service. 
//Not used right now, but will later to verify values are what they're suppose to be (ie array, string, etc.)
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'login-module',
  template: `
    
<main class="main">
<div clal="master_div">
  <div class="maintenance">Profile Creation<p></p>Under Maintenance</div>
  <div class="login_container">
    <div>    
            <!--Must use '?' after golang_data because angular doesn't evaluate golang_data since it equals null initially-->
            <div>Other:{{golang_data?.Name}}{{golang_data?.First_Name}}{{golang_data?.Last_Name}}</div>

            <button class="btn" (click)="getInfo()">Get Random Quote</button>

            <div>You have started a user session: {{session-name?.test_user_info}} </div>

            <button class="btn" (click)="getCookie()">Start Session</button>

        
        <h1 class="header">Enter your user ID to access the site</h1>
        <div>
            <form action="/login_user" method="GET">
                <p>Enter username: <input type="text"     name="username"></p>
                <p>Enter password: <input type="password" name="password"></p>
                <p><input id="submit_login" (click)="startSession()" type="submit"  value="Enter the site"></p>
            </form>
        </div>
    </div>
    <p></p>  
    <div id="create_id_div">
        <form action="/create_user" method="POST">
            <h1 class="header" >OR create a profile below</h1>
            <p>Create Username: <input type="text"     name="username"></p>
            <p>Create Password: <input type="password" name="password"></p>
            <p>Enter First Name:<input type="text"     name="first_name"></p>
            <p>Enter Last Name: <input type="text"     name="last_name"></p>
            <p><input id="submit_create_login" type="submit" value="Create User"></p>
        </form>
    </div>
  </div>
</div>
</main>

  `,
  styleUrls: ['app/css/login.component.css']
})

export class LoginComponent {


  constructor (
      private http: Http,
      private _cookieService:CookieService
  ){}
  //constructor(private _cookieService:CookieService){} //cookie

  //Profile creation pretty much done, just make it look nice and add errors if name, username, etc. are too short/long, exist, etc.
  //Now we need to tie this to the 'Enter the Site' button.
  //1. Login retreives mongodb
  //2. Display logged in user info
  //3. Setup session for constant logged in status

  golang_data;
  session_data;

  
  getInfo ()   {
    this.http.get('/golang_get_url')
      .map(res => res.json())
      .subscribe(
          data => this.golang_data = data,
          err => this.logError(err),
          () => console.log(this.golang_data)
        );
  }

  //On enter username/password submit, cookie is retrieved and session starts. 
  startSession ()   {
    console.log(this)
    this.http.get('/session-name')
    .map(res => res.json()) //Change top JSON once data is changed to JSON from main.go script
    .subscribe(
        data => this.session_data = data,
        err => this.logError(err),
        () => console.log(this.session_data)
    );
  }

  //Should hold "cookie information"
  getCookie(test_user_info: string){
    console.log(test_user_info);
    
    return this._cookieService.get(test_user_info);

  
  }

  logError(err) {
  console.error('There was an error: ' + err);
  }

}





