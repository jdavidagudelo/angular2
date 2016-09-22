import { Component, HostListener } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { };
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  mouseDown: boolean = false;
  dx: number = 0;
  dy: number = 0;
  id: number = 1;

  onSelect(event, hero: Hero): void {
    this.selectedHero = hero;
    this.mouseDown = true;
  };
  
  onRemoveHero(event, hero: Hero): void{
    this.heroes.splice(this.heroes.indexOf(hero), 1);
  };

  onCreateButtonElement(event): void{
    var hero = {id: this.id, name: 'New Staff', x: event.clientX, y: event.clientY, editing: false, type: "button" };
    this.heroes.push(hero);
    this.mouseDown = true;
    this.selectedHero = hero;
    this.dx = hero.x - event.clientX;
    this.dy = hero.y - event.clientY;
    event.stopPropagation();
    this.id++;
  };

 onCreatePanelElement(event): void{
    var hero = {id: this.id, name: 'New Staff', x: event.clientX, y: event.clientY, editing: false, type: "panel" };
    this.heroes.push(hero);
    this.mouseDown = true;
    this.selectedHero = hero;
    this.dx = hero.x - event.clientX;
    this.dy = hero.y - event.clientY;
    event.stopPropagation();
    this.id++;
  };

 onMouseDownElement(event, hero: Hero): void {
    
    this.selectedHero = hero;
    this.mouseDown = true;
    this.dx = hero.x - event.clientX;
    this.dy = hero.y - event.clientY;
    event.stopPropagation();
  };
  @HostListener('mouseup', ['$event'])
  onMouseUp(event) {
    this.mouseDown = false;
    event.stopPropagation();
  };
  
  @HostListener('mousemove', ['$event'])
  onMouseMove(event) {
    if(this.mouseDown && this.selectedHero !== undefined){
      this.selectedHero.x = event.clientX + this.dx;
      this.selectedHero.y = event.clientY + this.dy;
    }
    event.stopPropagation();
  };

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };
  ngOnInit(): void {
    this.getHeroes();
  };

}

