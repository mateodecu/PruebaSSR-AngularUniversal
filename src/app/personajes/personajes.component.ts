import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Personaje } from '../model/personaje'
import { OpenGraphService } from '../services/open-graph.service'

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
    private _openGraphService: OpenGraphService
  ) { }

  ngOnInit(): void {
    this._dataService.getPersonajes().subscribe((data: any) => {
      this.personajes = data.results;
      this.cargado = true;
      this._openGraphService.setOpenGraphTags(null, 'Personajes de Star Wars', 'La lista de todos los personajes de Star Wars.');
    })
  }
}