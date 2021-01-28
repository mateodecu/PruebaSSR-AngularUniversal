import { Component, OnInit } from '@angular/core';
import { DataService, Personaje } from '../services/data.service'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  cargado: boolean = false;

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {
    this._dataService.getPersonajes().subscribe( (data: any) => {
      this.personajes = data.results;
      this.cargado = true;
    })
  }
}