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
var PodcastComponent = (function () {
    function PodcastComponent() {
        this.casts = [
            { order: 1, title: 'Test Title for Bobcast', date: '10-14-2016', audio: './audio/eskmo.mp3', people: 'Robert, Joe, Jill, Dylan' },
            { order: 2, title: 'Title 2', date: '10-15-2016', audio: './audio/song.mp3', people: 'All of america' }
        ];
        this.audio = '';
        this.current_audio = '';
        this.current_title = 'Select a cast in the "Listen Now" section!';
    }
    PodcastComponent.prototype.selectAudio = function (cast) {
        this.current_audio = cast.audio;
        this.current_title = cast.title;
        console.log(this.current_audio);
    };
    PodcastComponent = __decorate([
        core_1.Component({
            selector: 'podcast-list',
            template: "\n\n\n<div class=\"audio_container\"><paper-audio-player src={{current_audio}} title={{current_title}} ></paper-audio-player></div>\n\n<main>\n\n  <div class=\"table_row\">\n\n    <div class=\"table_column\">\n      <div class=\"table_header\">#</div>\n      <div *ngFor=\"let cast of casts\" class=\"table_list\">{{cast.order}}</div>\n    </div>\n\n    <div class=\"table_column\">\n      <div class=\"table_header\">Title</div>\n      <div *ngFor=\"let cast of casts\" class=\"table_list\">{{cast.title}}</div>\n    </div>\n\n    <div class=\"table_column\">\n      <div class=\"table_header\">Date</div>\n      <div *ngFor=\"let cast of casts\" class=\"table_list\">{{cast.date}}</div>\n    </div>\n    \n    <div class=\"table_column\">\n      <div class=\"table_header\">Listen</div>\n      <div *ngFor=\"let cast of casts\" class=\"list_button\"><button (click)=\"selectAudio(cast)\">Listen Now</button></div>\n    </div>  \n\n  </div>\n\n</main>\n  ",
            styles: ["\n    .audio_container{\n      position: fixed;\n      z-index: 2;\n      top: 0;\n      left: 0;\n      width: 100%;\n    }\n    button{\n      border-radius: 10px;\n    }\n    .table_row{\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      font:  30px 'Noir';\n      width: 810px;\n    }\n    .table_column{\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      font:  30px 'Noir';\n    }\n    .table_header{\n      border-bottom-style: double;\n      border-left-style: double;\n      border-right-style: double;\n      border-color: #0dba83;\n      border-width: 8px;\n      padding: 8px;\n      color: #0dba83;\n      font-size: 50px; \n      text-align: center;\n    }\n    .list_button{\n      font-size: 30px; \n      text-align: center;\n      padding: 10px;\n      border-bottom-style: solid;\n      border-color: #0dba83;\n      border-width: 5px;\n      color: #8a2be2;\n    }\n    .table_list{\n      font-size: 30px; \n      text-align: center;\n      padding: 13px;\n      border-bottom-style: solid;\n      border-color: #0dba83;\n      border-width: 5px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], PodcastComponent);
    return PodcastComponent;
}());
exports.PodcastComponent = PodcastComponent;
//# sourceMappingURL=podcast.component.js.map