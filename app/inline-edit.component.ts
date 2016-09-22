import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'inline-edit',
  templateUrl: 'app/inline-edit.component.html'
})

export class InlineEdit {
  @Input()
  hero: Hero;
  startEditingHero(hero: Hero): void {
    hero.editing = true;
  };
  stopEditingHero(hero: Hero): void {
    hero.editing = false;
  };
}
