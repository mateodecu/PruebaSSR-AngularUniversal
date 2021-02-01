import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
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