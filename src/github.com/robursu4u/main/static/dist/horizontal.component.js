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
var HorizontalComponent = (function () {
    function HorizontalComponent() {
    }
    HorizontalComponent = __decorate([
        core_1.Component({
            selector: 'horizontal-separator',
            template: "\n    \n<main>\n\n<div class=\"separate_container\"><div class=\"separate_left\"></div></div>\n<div class=\"separate_container\"><div class=\"separate_right\"></div></div>\n\n\n\n</main>\n\n  ",
            styles: ["\n    .separate_left{\n      position: absolute;\n      background: #0dba83; \n      height: 8px;\n      width: 100%;\n      overflow: hidden;\n    }\n    .separate_right{\n      position: absolute;\n      background: #0dba83; \n      height: 8px;\n      width: 106.55%;\n      left:  20%;\n      overflow: hidden;\n    }    \n    .separate_container{\n      position: relative;\n      padding: 7px;\n      right: 25%;\n      width: 130%;\n\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HorizontalComponent);
    return HorizontalComponent;
}());
exports.HorizontalComponent = HorizontalComponent;
//# sourceMappingURL=horizontal.component.js.map