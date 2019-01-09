import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroTitle = 'Windstorm';
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  //heroes = HEROES;
  heroes: Hero[] = [];
  
  // getHeroes(): void {
  //   //this.heroes = this.heroService.getHeroes();
  //   this.heroes = this.heroes.concat(this.heroService.getHeroes());
  // }
  
  getHeroes(): void {
    this.heroService.getHeroes()
      //.subscribe(heroes => this.heroes = heroes);
      .subscribe(heroes => {
        
        this.heroes.push({
          id: 1,
          name: '333'
        });
        
        this.heroes = this.heroes.concat(heroes);
        
        this.heroes.push({
          id: 1,
          name: '555'
        });
        
      });
  }
  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //constructor() { }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.heroes.push({
    //   id: 1,
    //   name: '333'
    // });
    this.getHeroes();
    // this.heroes.push({
    //   id: 1,
    //   name: '555'
    // });
  }

}
