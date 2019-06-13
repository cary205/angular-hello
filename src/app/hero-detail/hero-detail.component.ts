//import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  
  goBack(): void {
    this.location.back();
  }
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        console.log("heroes: " + JSON.stringify(hero));

        this.hero = hero;
      });
  }
  
  save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
 }

}
