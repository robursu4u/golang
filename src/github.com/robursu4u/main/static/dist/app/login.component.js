var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-module',
            template: "\n    \n<main class=\"main\">\n<div clal=\"master_div\">\n  <div class=\"maintenance\">Profile Creation<p></p>Under Maintenance</div>\n  <div class=\"login_container\">\n    <div>\n        <h1 class=\"header\">Enter your user ID to access the site</h1>\n        <div >\n            <form action=\"/login_user\" method=\"GET\">\n                <p>Enter username: <input type=\"text\"     name=\"username\"></p>\n                <p>Enter password: <input type=\"password\" name=\"password\"></p>\n                <p><input id=\"submit_login\" type=\"submit\"  value=\"Enter the site\"></p>\n            </form>\n              </div>\n    </div>\n    <p></p>  \n    <div id=\"create_id_div\">\n        <form action=\"/create_user\" method=\"POST\">\n            <h1 class=\"header\" >OR create a profile below</h1>\n            <p>Create Username: <input type=\"text\"     name=\"username\"></p>\n            <p>Create Password: <input type=\"password\" name=\"password\"></p>\n            <p>Enter First Name:<input type=\"text\"     name=\"first_name\"></p>\n            <p>Enter Last Name: <input type=\"text\"     name=\"last_name\"></p>\n            <p><input id=\"submit_create_login\" type=\"submit\" value=\"Create User\"></p>\n        </form>\n    </div>\n  </div>\n</div>\n\n\n\n</main>\n\n  ",
            styles: ["\n    .main{\n      pointer-events: none;\n\n    }\n    .header {\n      font-size: 30px;\n      margin: auto;\n      text-align: center;\n    }\n    .master_div{\n      position: relative;\n      width: 100%;\n      \n    }\n    .login_container {\n      border: 15px solid #0dba83;\n      padding: 80px;\n      border-radius: 50px;\n      filter: blur(8px) contrast(10) opacity(.5);\n    }\n    .maintenance {\n      position: relative;\n      font:  75px 'Noir'; \n      left: 0;\n      top: 300px;\n      width: 100%;\n      text-align: center;\n      filter: brightness(10);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map