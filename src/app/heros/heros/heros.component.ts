import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDataService } from '../hero-data.service';

@Component({
  selector: 'toh-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];

  constructor(private heroDataService: HeroDataService) { }

  ngOnInit() {
    this.heroDataService.getHeros()
      .subscribe(heros => this.heros = heros);

  }

  // getHeros() {
  //   return this.heroDataService.getHeros();
  // };

}
