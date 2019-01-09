import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. NiceDB' },
      { id: 12, name: 'NarcoDB' },
      { id: 13, name: 'BombastoDB' },
      { id: 14, name: 'CeleritasDB' },
      { id: 15, name: 'MagnetaDB' },
      { id: 16, name: 'RubberManDB' },
      { id: 17, name: 'DynamaDB' },
      { id: 18, name: 'Dr IQDB' },
      { id: 19, name: 'MagmaDB' },
      { id: 20, name: 'TornadoDB' }
    ];
    
    var aaa = [];
    console.log(Array.isArray(aaa));
    console.log(Array.isArray(heroes));
    console.log(Array.isArray({heroes}));
    
    console.log(heroes.length);
    console.log(JSON.stringify(heroes[1])); //{"id":12,"name":"NarcoDB"}
    
    console.log(JSON.stringify(heroes));
    // [
    //   {"id":11,"name":"Mr. NiceDB"},
    //   {"id":12,"name":"NarcoDB"},
    //   {"id":13,"name":"BombastoDB"},
    //   {"id":14,"name":"CeleritasDB"},
    //   {"id":15,"name":"MagnetaDB"},
    //   {"id":16,"name":"RubberManDB"},
    //   {"id":17,"name":"DynamaDB"},
    //   {"id":18,"name":"Dr IQDB"},
    //   {"id":19,"name":"MagmaDB"},
    //   {"id":20,"name":"TornadoDB"}
    // ]
    
    var objHeros = {heroes};
    console.log(JSON.stringify(objHeros));
    // {"heroes":[
    //   {"id":11,"name":"Mr. NiceDB"},
    //   {"id":12,"name":"NarcoDB"},
    //   {"id":13,"name":"BombastoDB"},
    //   {"id":14,"name":"CeleritasDB"},
    //   {"id":15,"name":"MagnetaDB"},
    //   {"id":16,"name":"RubberManDB"},
    //   {"id":17,"name":"DynamaDB"},
    //   {"id":18,"name":"Dr IQDB"},
    //   {"id":19,"name":"MagmaDB"},
    //   {"id":20,"name":"TornadoDB"}
    // ]}
    
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}