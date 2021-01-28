import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PersonajesComponent } from './personajes/personajes.component'
import { PersonajeComponent } from './personaje/personaje.component'
import { PlanetasComponent } from './planetas/planetas.component'
import { PlanetaComponent } from './planeta/planeta.component'

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:index', component: PersonajeComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'planeta/:index', component: PlanetaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);