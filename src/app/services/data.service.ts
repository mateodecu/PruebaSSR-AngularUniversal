import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  API_URL = 'https://swapi.dev/api/';
  PERSONAJES_URL = 'people/';
  PLANETAS_URL = 'planets/';

  constructor(
    private http: HttpClient
  ) { }

  getQuery(query: string) {
    const url = `${this.API_URL}${query}`;
    return this.http.get(url);
  }

  getPersonajes() {
    return this.getQuery(`${this.PERSONAJES_URL}`);
  }

  getPersonaje(index) {
    return this.getQuery(`${this.PERSONAJES_URL}${index}/`);
  }

  getPlanetas() {
    return this.getQuery(`${this.PLANETAS_URL}`);
  }

  getPlaneta(index) {
    return this.getQuery(`${this.PLANETAS_URL}${index}/`);
  }
}

export interface Personaje {
  name: string,
  height: number,
  mass: number,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
}

export interface Planeta {
  name: string,
	rotation_period: number,
	orbital_period: number,
	diameter: number,
	climate: string,
	gravity: string,
	terrain: string,
	surface_water: number,
	population: number,
}