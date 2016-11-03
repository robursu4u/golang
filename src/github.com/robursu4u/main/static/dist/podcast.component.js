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
var cast_1 = require('./cast');
var PodcastComponent = (function () {
    function PodcastComponent() {
        this.casts = [
            new cast_1.Cast(1, 'Test Title for Bobcast', '10-14-2016', 'Robert, Joe, Jill, Dylan'),
            new cast_1.Cast(2, 'Revenge of harambe', '10-25-2016', 'Ghost council of Harambe')
        ];
        this.audio = '';
        this.cast_title = "Select a cast in the 'Listen Now' section!";
    }
    PodcastComponent.prototype.onClickMe0 = function () {
        this.audio = './audio/eskmo.mp3';
        this.cast_title = "Test Title for Bobcast";
    };
    PodcastComponent.prototype.onClickMe1 = function () {
        this.audio = './audio/song.mp3';
        this.cast_title = "Revenge of harambe";
    };
    PodcastComponent = __decorate([
        core_1.Component({
            selector: 'podcast-list',
            template: "\n\n\n<div class=\"audio_container\"><paper-audio-player src={{audio}} title={{cast_title}} ></paper-audio-player></div>\n\n<main>\n\n  <div class=\"table_container\">\n    <table class=\"table_style\">\n\n      <th><div class=\"table_header\">Listen</div></th>\n      <th><div class=\"table_header\">#</div></th>\n      <th><div class=\"table_header\">Title</div></th> \n      <th><div class=\"table_header\">Date</div></th>\n\n      <tr>\n        <td>\n          <li >\n            <div class=\"table_list\"><button (click)=\"onClickMe0()\">Listen Now</button></div>\n            <div class=\"table_list\"><button (click)=\"onClickMe1()\">Listen Now</button></div>\n\n          </li>\n        </td>     \n    \t\t<td>\n          <li *ngFor=\"let cast of casts\">\n            <div class=\"table_list\">{{cast.order}}</div>\n          </li>\n        </td>\n    \t\t<td>\n          <li *ngFor=\"let cast of casts\">\n            <div class=\"table_list\">{{cast.title}}</div>\n          </li>\n        </td>\n    \t\t<td>\n          <li *ngFor=\"let cast of casts\">\n            <div class=\"table_list\">{{cast.date}}</div>\n          </li>\n        </td>\n    \t</tr>\n    \n    </table>\n  </div>\n\n</main>\n  ",
            styles: ["\n    .audio_container{\n      position: fixed;\n      z-index: 2;\n      top: 0;\n      left: -1%;\n      width: 101%;\n    }\n    li{\n      list-style-type: none;\n    }\n  \t.table_style{\n  \t  width: 100%;\n  \t}\n    .table_container{\n      position: relative;\n      font:  30px 'Noir';\n    }\n    .table_header{\n      border-bottom-style: double;\n      border-left-style: double;\n      border-right-style: double;\n      border-color: #0dba83;\n      border-width: 8px;\n      padding: 5px;\n      color: #0dba83;\n      font-size: 50px; \n      text-align: center;\n    }\n    .table_list{\n      font-size: 30px; \n      text-align: center;\n      padding: 8px;\n      border-left-style: solid;\n      border-right-style: solid;\n      border-bottom-style: solid;\n      border-color: #0dba83;\n      border-width: 5px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], PodcastComponent);
    return PodcastComponent;
}());
exports.PodcastComponent = PodcastComponent;
//# sourceMappingURL=podcast.component.js.map