import { Component } from '@angular/core';

@Component({
  selector: 'login-module',
  template: `
    
<main class="main">
<div clal="master_div">
  <div class="maintenance">Profile Creation<p></p>Under Maintenance</div>
  <div class="login_container">
    <div>
        <h1 class="header">Enter your user ID to access the site</h1>
        <div >
            <form action="/login_user" method="GET">
                <p>Enter username: <input type="text"     name="username"></p>
                <p>Enter password: <input type="password" name="password"></p>
                <p><input id="submit_login" type="submit"  value="Enter the site"></p>
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
  styles: [`
    .main{
      pointer-events: none;

    }
    .header {
      font-size: 30px;
      margin: auto;
      text-align: center;
    }
    .master_div{
      position: relative;
      width: 100%;
      
    }
    .login_container {
      border: 15px solid #0dba83;
      padding: 80px;
      border-radius: 50px;
      filter: blur(8px) contrast(10) opacity(.5);
    }
    .maintenance {
      position: relative;
      font:  75px 'Noir'; 
      left: 0;
      top: 300px;
      width: 100%;
      text-align: center;
      filter: brightness(10);
    }
  `]
})
export class LoginComponent {

}





