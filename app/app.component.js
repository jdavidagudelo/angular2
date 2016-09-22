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
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        this.mouseDown = false;
        this.dx = 0;
        this.dy = 0;
        this.id = 1;
    }
    ;
    AppComponent.prototype.onSelect = function (event, hero) {
        this.selectedHero = hero;
        this.mouseDown = true;
    };
    ;
    AppComponent.prototype.onRemoveHero = function (event, hero) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
    };
    ;
    AppComponent.prototype.onCreateButtonElement = function (event) {
        var hero = { id: this.id, name: 'New Staff', x: event.clientX, y: event.clientY, editing: false, type: "button" };
        this.heroes.push(hero);
        this.mouseDown = true;
        this.selectedHero = hero;
        this.dx = hero.x - event.clientX;
        this.dy = hero.y - event.clientY;
        event.stopPropagation();
        this.id++;
    };
    ;
    AppComponent.prototype.onCreatePanelElement = function (event) {
        var hero = { id: this.id, name: 'New Staff', x: event.clientX, y: event.clientY, editing: false, type: "panel" };
        this.heroes.push(hero);
        this.mouseDown = true;
        this.selectedHero = hero;
        this.dx = hero.x - event.clientX;
        this.dy = hero.y - event.clientY;
        event.stopPropagation();
        this.id++;
    };
    ;
    AppComponent.prototype.onMouseDownElement = function (event, hero) {
        this.selectedHero = hero;
        this.mouseDown = true;
        this.dx = hero.x - event.clientX;
        this.dy = hero.y - event.clientY;
        event.stopPropagation();
    };
    ;
    AppComponent.prototype.onMouseUp = function (event) {
        this.mouseDown = false;
        event.stopPropagation();
    };
    ;
    AppComponent.prototype.onMouseMove = function (event) {
        if (this.mouseDown && this.selectedHero !== undefined) {
            this.selectedHero.x = event.clientX + this.dx;
            this.selectedHero.y = event.clientY + this.dy;
        }
        event.stopPropagation();
    };
    ;
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ;
    __decorate([
        core_1.HostListener('mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onMouseUp", null);
    __decorate([
        core_1.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onMouseMove", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map