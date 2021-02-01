import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Personaje } from '../model/personaje'
import { ActivatedRoute } from '@angular/router'
import { OpenGraphService } from '../services/open-graph.service'

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  personaje: Personaje;
  cargado: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _openGraphService: OpenGraphService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this._dataService.getPersonaje(data['index']).subscribe((data: any) => {
        this.personaje = data;
        this.cargado = true;
        this._openGraphService.setOpenGraphTags(null, this.personaje.name, this.personaje.birth_year);
      })
    })
  }
}
