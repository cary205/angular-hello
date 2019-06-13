import { Component, OnInit } from '@angular/core';
import { FuliService } from '../fuli.service';

@Component({
  selector: 'app-fuli',
  templateUrl: './fuli.component.html',
  styleUrls: ['./fuli.component.css']
})
export class FuliComponent implements OnInit {

  constructor(private fuliService: FuliService) { }
  
  results: object[] = [];

  ngOnInit() {
    this.getFulis();
  }
  
  getFulis(): void {
    this.fuliService.getFulis()
      .subscribe(fulis => {
        console.log('fulis: ' + fulis);
        this.results = JSON.parse(JSON.stringify(fulis)).results;
        console.log('this.results: ' + this.results);
      });
  }

}
