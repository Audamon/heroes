import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroes, Hero } from '../models/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly urlApi = '/api/5033128890082701/';
  private search: string = '';
  private id: number = 0;
  constructor(private http: HttpClient) { }

  getHeores(search: string){
  
    return this.http.get<Heroes>(this.urlApi+'search/' + (search || this.search));
  }
  getHero(id: number){
    return this.http.get<Hero>(this.urlApi +(id || this.id))
  }
  setString(search:string) {
    this.search = search;
  }
  getString():string{
   return this.search;
  }
  setId(id: number){
    this.id = id;
  }
  getId():number{
    return this.id;
  }
}
