import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'draggable-button',
  templateUrl: 'app/button.component.html'
})

export class DraggableButton {
  @Input()
  hero: Hero;
  @Input()
  heroes: Hero[];
  onRemoveHero(event, hero: Hero): void{
    this.heroes.splice(this.heroes.indexOf(hero), 1);
  };
}
