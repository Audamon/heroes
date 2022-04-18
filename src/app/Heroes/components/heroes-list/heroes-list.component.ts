import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  search: string = '';
  heroesList: any;
  constructor(private heroes: HeroesService, private route: Router) { }

  ngOnInit(): void {
    this.search = this.heroes.getString();
    if(this.search === ''){
      this.route.navigate(['']);
    } else {
      this.getHeroes();
    }
  }
  getHeroes(){
    this.heroes.getHeores(this.search).subscribe(
      heroes => {
        const  heroesAux = heroes.results.filter(hero => hero.name[0] === this.search);
        console.log(heroes);
        this.heroesList = {
        response: heroes.response,
        results: heroesAux,
        };
        console.log(this.heroesList);
      }
    );
  }
  chooseHero(id: number){
    this.heroes.setId(id);
    this.route.navigate(['hero'])
  }
  goBack() {
    this.route.navigate(['/']);
  }
}
