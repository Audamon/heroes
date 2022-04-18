import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   search: string = '';
  constructor(private router: Router, private heroes: HeroesService) { }

  ngOnInit(): void {
  }

  changeComponent(name:string){
    this.search = name;
    this.heroes.setString(this.search);
    this.router.navigate(['list'])
  }
}
