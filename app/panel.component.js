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
var hero_1 = require('./hero');
var DraggablePanel = (function () {
    function DraggablePanel() {
        this.id = 1;
        this.mouseDown = false;
        this.dx = 0;
        this.dy = 0;
    }
    DraggablePanel.prototype.onRemoveHero = function (event, hero) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
    };
    ;
    DraggablePanel.prototype.onCreateButtonElement = function (event) {
        if (this.hero !== undefined) {
            var hero = { id: this.id, name: 'New Staff', x: 0, y: 0, editing: false, type: "button" };
            this.innerHeroes.push(hero);
            event.stopPropagation();
            this.id++;
        }
    };
    ;
    DraggablePanel.prototype.onMouseDownElement = function (event, hero) {
        this.selectedHero = hero;
        this.mouseDown = true;
        this.dx = hero.x - event.clientX;
        this.dy = hero.y - event.clientY;
        event.stopPropagation();
    };
    ;
    DraggablePanel.prototype.onMouseUp = function (event) {
        this.mouseDown = false;
        event.stopPropagation();
    };
    ;
    DraggablePanel.prototype.onMouseMove = function (event) {
        if (this.mouseDown && this.selectedHero !== undefined) {
            this.selectedHero.x = event.clientX + this.dx;
            this.selectedHero.y = event.clientY + this.dy;
        }
        event.stopPropagation();
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], DraggablePanel.prototype, "hero", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DraggablePanel.prototype, "heroes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DraggablePanel.prototype, "innerHeroes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], DraggablePanel.prototype, "selectedHero", void 0);
    DraggablePanel = __decorate([
        core_1.Component({
            selector: 'draggable-panel',
            templateUrl: 'app/panel.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DraggablePanel);
    return DraggablePanel;
}());
exports.DraggablePanel = DraggablePanel;
//# sourceMappingURL=panel.component.js.map