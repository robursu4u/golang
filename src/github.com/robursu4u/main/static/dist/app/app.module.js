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
var platform_browser_1 = require('@angular/platform-browser');
var horizontal_component_1 = require('./horizontal.component');
var login_component_1 = require('./login.component');
var podcast_component_1 = require('./podcast.component');
var navigation_component_1 = require('./navigation.component');
var welcome_component_1 = require('./welcome.component');
var HorizontalModule = (function () {
    function HorizontalModule() {
    }
    HorizontalModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [horizontal_component_1.HorizontalComponent],
            bootstrap: [horizontal_component_1.HorizontalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HorizontalModule);
    return HorizontalModule;
})();
exports.HorizontalModule = HorizontalModule;
var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [welcome_component_1.WelcomeComponent],
            bootstrap: [welcome_component_1.WelcomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeModule);
    return WelcomeModule;
})();
exports.WelcomeModule = WelcomeModule;
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [login_component_1.LoginComponent],
            bootstrap: [login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
})();
exports.LoginModule = LoginModule;
var PodcastModule = (function () {
    function PodcastModule() {
    }
    PodcastModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [podcast_component_1.PodcastComponent],
            bootstrap: [podcast_component_1.PodcastComponent],
            //Required for paper audio module I downloaded from github
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], PodcastModule);
    return PodcastModule;
})();
exports.PodcastModule = PodcastModule;
var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            //Declare components for Nav component to recognize other components
            declarations: [navigation_component_1.NavigationComponent, horizontal_component_1.HorizontalComponent, login_component_1.LoginComponent, podcast_component_1.PodcastComponent, welcome_component_1.WelcomeComponent],
            bootstrap: [navigation_component_1.NavigationComponent],
            //Need to place "CUSTOM_ELEMENTS_SCHEMA " when PodcastComponent (because paper-audio-player element)
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationModule);
    return NavigationModule;
})();
exports.NavigationModule = NavigationModule;
//# sourceMappingURL=app.module.js.map