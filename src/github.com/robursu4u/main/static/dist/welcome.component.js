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
var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'welcome-component',
            template: "\n\n  <main>\n\n\n  \t<h1>He is your president, deal with it.</h1>\n\n    <div>\n    Website for my up and coming podcast! I plan on working on the site daily so \n    check back often! We plan on uploading our first episodes soon; we just have to \n    edit some audio.\n\t  </div>\n\n  </main>\n  ",
            styles: ["\n\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map