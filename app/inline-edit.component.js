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
var InlineEdit = (function () {
    function InlineEdit() {
    }
    InlineEdit.prototype.startEditingHero = function (hero) {
        hero.editing = true;
    };
    ;
    InlineEdit.prototype.stopEditingHero = function (hero) {
        hero.editing = false;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], InlineEdit.prototype, "hero", void 0);
    InlineEdit = __decorate([
        core_1.Component({
            selector: 'inline-edit',
            templateUrl: 'app/inline-edit.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], InlineEdit);
    return InlineEdit;
}());
exports.InlineEdit = InlineEdit;
//# sourceMappingURL=inline-edit.component.js.map