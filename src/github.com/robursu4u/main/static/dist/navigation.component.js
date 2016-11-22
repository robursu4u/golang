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
//2. Email for contacting
//3. Login to work, golang portion nearly complete. Just have to POST with rest REST in angualar to receive info :)
//4. Voting on stuff
var NavigationComponent = (function () {
    function NavigationComponent() {
        //Initialize css 'show' in display option
        this.show_gate = "none";
    }
    NavigationComponent.prototype.receiveEvent = function (event) {
        this.show_gate = "none";
        return this.show_gate;
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation-app',
            template: "\n<main>\n\n<div class=\"gate_container\" [style.display]=\"show_gate\">\n  <gate-component (removeGate)=\"receiveEvent($event)\"></gate-component>\n</div>\n\n<div class=\"nav_container_outside\">\n  <div class=\"nav_container_inside\">\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <a href=\"#welcome\"><h1 class=\"nav\">Welcome        </h1></a>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <a href=\"#listen_now\"><h1 class=\"nav\">Listen Now  </h1></a>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <a href=\"#login\"><h1 class=\"nav\">Login            </h1></a>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n    <a href=\"#contact\"><h1 class=\"nav\">Contact        </h1></a>\n    <horizontal-separator class=\"nav_horizontal\"></horizontal-separator>\n  </div>\n</div>\n\n<div class=\"everything_else_container\">\n  <div class=\"horizontal_main_page\"><horizontal-separator></horizontal-separator></div>\n\n  <a name=\"welcome\"><div class=\"welcome_container\"><welcome-component></welcome-component></div></a>\n\n  <div class=\"horizontal_main_page\"><horizontal-separator></horizontal-separator></div>\n\n  <a name=\"listen_now\"><podcast-list></podcast-list></a>\n\n  <div class=\"horizontal_main_page\"><horizontal-separator></horizontal-separator></div>\n  \n  <a name=\"login\"><login-module></login-module></a>\n\n  <div class=\"horizontal_main_page\"><horizontal-separator></horizontal-separator></div>\n</div>\n\n</main>\n  ",
            styleUrls: ['app/css/navigation.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map