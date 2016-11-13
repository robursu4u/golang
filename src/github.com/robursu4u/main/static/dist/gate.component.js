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
var GateComponent = (function () {
    function GateComponent() {
        //Declaring onEnterSite as a new EventEmmitter we're sending to Navigation Comp
        //Also declaring what type of info we're sending to NavComp (string) 
        this.removeGate = new core_1.EventEmitter();
    }
    //Function binded to button. Will trigger when clicked and output new "show_gate" value (display: "none")
    GateComponent.prototype.clickEmitEnter = function (event) {
        this.removeGate.emit(event);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GateComponent.prototype, "removeGate", void 0);
    GateComponent = __decorate([
        core_1.Component({
            selector: 'gate-component',
            template: "\n\n  <main>\n\n  \n  <div>\n    <h1 class=\"greeting_text\">Greetings Stranger</h1>\n    <h2 class=\"greeting_message\">Welcome to Bobcast Radio,<p></p>a place where nerds flourish</h2>\n  </div>\n\n  <div class=\"button_wrapper\">\n    <button class=\"button\" (click)=\"clickEmitEnter($event)\">Enter Site</button>\n  </div>\n\n\n\n  <div class=\"chrome_container\">\n    <a href=\"https://www.google.com/chrome/browser\">\n\n      <h3 class=\"chrome\">\n        The site works best with Google Chrome web browser. \n        <p></p>\n        You may lose functionality on other browsers\n      </h3>\n      \n      <div chrome_img=\"chrome_img_container\"><img src=\"img/chrome.png\" class=\"chrome_img\"></div>\n\n      <h3 class=\"chrome\">\n        Click to be directed to Chrome download. \n        <p></p>\n        Don't worry, it's safe; it's the internet.\n      </h3>\n    \n    </a>\n  </div>\n  \n  \n  </main>\n  ",
            styles: ["\n    .greeting_text{\n      font-family: 'Noir', Verdana, Arial;\n      font-size: 120px;\n      padding: 20px;\n      text-align: center;\n      color: #0dba83;\n    }\n    .greeting_message{\n      font-family: 'Noir', Verdana, Arial;\n      font-size: 50px;\n      text-align: center;\n      color: #0dba83;\n      padding: 30px;\n    }\n    .button{\n      font-family: 'Noir', Verdana, Arial;\n      font-size: 100px;\n      color: #272b30;\n      border-radius: 30px;\n      background-color: #0dba83;\n      width: 80%;\n    }\n    .button_wrapper{\n      display: flex;           \n      justify-content: center;\n      width: 100%;\n      padding-bottom: 150px;\n    }\n    .chrome_container{\n      background-color: #22262a;\n      border-radius: 30px;\n      position: static; \n      bottom: 0;\n      left: 0; \n      right: 0; \n      margin-left: auto; \n      margin-right: auto; \n      width: 40%;\n    }\n    .chrome{\n      font-size: 15px;\n      text-align: center;\n      color: #0dba83;\n    }\n    .chrome_img{\n      padding-top: 1%;\n      width: 8%;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], GateComponent);
    return GateComponent;
}());
exports.GateComponent = GateComponent;
//# sourceMappingURL=gate.component.js.map