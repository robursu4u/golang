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
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation-app',
            template: "\n\n\n<main>\n\n<div class=\"nav_container_outside\">\n  \n  <div class=\"nav_container_inside\">\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <h1 class=\"nav\">Welcome</h1>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <h1 class=\"nav\">Listen Now</h1>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <h1 class=\"nav\">Login</h1>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <h1 class=\"nav\">Contact</h1>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n  </div>\n\n</div>\n\n<div class=\"everything_else_container\">\n\n  <div class=\"welcome_container\"><welcome-component></welcome-component></div>\n\n  <div class=\"horizontal_main_page\"><horizontal-separator></horizontal-separator></div>\n\n  <podcast-list></podcast-list>\n\n  <div class=\"horizontal_main_page\"><horizontal-separator></horizontal-separator></div>\n  \n  <login-module></login-module>\n\n</div>\n\n\n</main>\n  ",
            styles: ["\n    .nav_container_outside{\n      border-right-style: groove;\n      border-color: #0dba83;\n      border-width: 10px;\n      height: 100%; \n      position: fixed; \n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 200px;\n      padding-left: 10px;\n      padding-right: 10px;\n      background-color: #272b30;\n    }\n    .nav_container_inside{\n      position: fixed;\n      height: 100%;\n      padding-left: 10px;\n      padding-right: 10px;\n      left: 0; \n      top: 20%;\n    }\n    .everything_else_container{\n      position: absolute;\n      width: 60%;\n      top: 0;\n      left: 200px;\n      padding-left: 60px;\n      background-color: #272b30;\n    }\n    .nav{\n      font-family: 'Noir', Verdana, Arial;\n      padding-top: 15px;\n      padding-bottom: 5px;\n    }\n    .welcome_container{\n      position: relative;\n      padding-top: 10%;\n    }\n    .horizontal_main_page{\n      padding-top: 70px;\n      padding-bottom: 70px;\n      position: relative;\n      left: 0;\n    }\n    .nav_horizontal{\n      position: relative;\n      right: 53%;\n    }\n    .audio_class{\n      border-bottom: solid;\n      border-width: 8px;\n      border-color: #0dba83;\n      position: fixed;\n      left: 0;\n      width: 98%;\n      width: 96%;\n      background-color: #272b30;\n      z-index: 1;\n      top: 0;\n      left: 0;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map