"use strict";
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
var http_1 = require('@angular/http');
var core_2 = require('angular2-cookie/core');
// Import RxJs required methods. Used in http.get method in getInfo
require('rxjs/Rx');
require('rxjs/add/operator/map');
var LoginComponent = (function () {
    function LoginComponent(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
    }
    LoginComponent.prototype.getInfo = function () {
        var _this = this;
        this.http.get('/golang_get_url')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.golang_data = data; }, function (err) { return _this.logError(err); }, function () { return console.log(_this.golang_data); });
    };
    //On enter username/password submit, cookie is retrieved and session starts. 
    LoginComponent.prototype.startSession = function () {
        var _this = this;
        console.log(this);
        this.http.get('/session-name')
            .map(function (res) { return res.json(); }) //Change top JSON once data is changed to JSON from main.go script
            .subscribe(function (data) { return _this.session_data = data; }, function (err) { return _this.logError(err); }, function () { return console.log(_this.session_data); });
    };
    //Should hold "cookie information"
    LoginComponent.prototype.getCookie = function (test_user_info) {
        console.log(test_user_info);
        return this._cookieService.get(test_user_info);
    };
    LoginComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-module',
            template: "\n    \n<main class=\"main\">\n<div clal=\"master_div\">\n  <div class=\"maintenance\">Profile Creation<p></p>Under Maintenance</div>\n  <div class=\"login_container\">\n    <div>    \n            <!--Must use '?' after golang_data because angular doesn't evaluate golang_data since it equals null initially-->\n            <div>Other:{{golang_data?.Name}}{{golang_data?.First_Name}}{{golang_data?.Last_Name}}</div>\n\n            <button class=\"btn\" (click)=\"getInfo()\">Get Random Quote</button>\n\n            <div>You have started a user session: {{session-name?.test_user_info}} </div>\n\n            <button class=\"btn\" (click)=\"getCookie()\">Start Session</button>\n\n        \n        <h1 class=\"header\">Enter your user ID to access the site</h1>\n        <div>\n            <form action=\"/login_user\" method=\"GET\">\n                <p>Enter username: <input type=\"text\"     name=\"username\"></p>\n                <p>Enter password: <input type=\"password\" name=\"password\"></p>\n                <p><input id=\"submit_login\" (click)=\"startSession()\" type=\"submit\"  value=\"Enter the site\"></p>\n            </form>\n        </div>\n    </div>\n    <p></p>  \n    <div id=\"create_id_div\">\n        <form action=\"/create_user\" method=\"POST\">\n            <h1 class=\"header\" >OR create a profile below</h1>\n            <p>Create Username: <input type=\"text\"     name=\"username\"></p>\n            <p>Create Password: <input type=\"password\" name=\"password\"></p>\n            <p>Enter First Name:<input type=\"text\"     name=\"first_name\"></p>\n            <p>Enter Last Name: <input type=\"text\"     name=\"last_name\"></p>\n            <p><input id=\"submit_create_login\" type=\"submit\" value=\"Create User\"></p>\n        </form>\n    </div>\n  </div>\n</div>\n</main>\n\n  ",
            styleUrls: ['app/css/login.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map