import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroInfoComponent } from './Heroes/components/hero-info/hero-info.component';
import { HeroesListComponent } from './Heroes/components/heroes-list/heroes-list.component';
import { HomeComponent } from './Heroes/components/home/home.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'list', component: HeroesListComponent},
{path: 'hero', component: HeroInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
