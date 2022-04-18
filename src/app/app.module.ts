import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Heroes/shared/components/navbar/navbar.component';
import { HomeComponent } from './Heroes/components/home/home.component';
import { HeroesListComponent } from './Heroes/components/heroes-list/heroes-list.component';
import { HeroInfoComponent } from './Heroes/components/hero-info/hero-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesListComponent,
    HeroInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
