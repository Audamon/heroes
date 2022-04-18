import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {
  id: number = 0;
  heroInfo: any;
  constructor(private heroes: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.heroes.getId();
    if(this.id === 0 ){
      this.router.navigate(['/']);
    }
    this.getHero(this.id);
  }

  getHero(id: number){
    this.heroes.getHero(id).subscribe(
      hero => {

        this.heroInfo={
          id: hero.id,
          name: hero.name,
          powerstats: hero.powerstats,
          briography: hero.briography,
          appearance: hero.appearance,
          work: hero.work,
          connections: hero.connections,
          image: hero.image,
        }
        console.log(this.heroInfo);
      }
    );
  }
  goBack() {
    this.router.navigate(['list'])
  }
}
