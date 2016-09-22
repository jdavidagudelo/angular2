import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'draggable-panel',
  templateUrl: 'app/panel.component.html'
})

export class DraggablePanel {
  @Input()
  hero: Hero;
  @Input()
  heroes: Hero[];
  @Input()
  innerHeroes: Hero[];
  @Input()
  selectedHero: Hero;
  id: number = 1;
  onRemoveHero(event, hero: Hero): void{
    this.heroes.splice(this.heroes.indexOf(hero), 1);
  };
  onCreateButtonElement(event): void{
    if(this.hero !== undefined){
      var hero = {id: this.id, name: 'New Staff', x: 0, y: 0, editing: false, type: "button" };
      this.innerHeroes.push(hero);
      event.stopPropagation();
      this.id++;
   }
  };
  mouseDown: boolean = false;
  dx: number = 0;
  dy: number = 0;
 onMouseDownElement(event, hero: Hero): void {
    this.selectedHero = hero;
    this.mouseDown = true;
    this.dx = hero.x - event.clientX;
    this.dy = hero.y - event.clientY;
    event.stopPropagation();
  };
  onMouseUp(event) {
    this.mouseDown = false;
    event.stopPropagation();
  };
  
  onMouseMove(event) {
    if(this.mouseDown && this.selectedHero !== undefined){
      this.selectedHero.x = event.clientX + this.dx;
      this.selectedHero.y = event.clientY + this.dy;
    }
    event.stopPropagation();
  };
}
