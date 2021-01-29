import { Component, OnInit } from '@angular/core';
import { DataService, Personaje } from '../services/data.service'
import { ActivatedRoute } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser';

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
    private metaService: Meta
  ) {
    this.activatedRoute.params.subscribe( data => {
      this._dataService.getPersonaje(data['index']).subscribe( (data: any) => {
        this.personaje = data;
        this.cargado = true;
      })
    })
    this.metaService.updateTag({ property: 'og:title', content: 'Titulo personaje' });
  }

  ngOnInit(): void {}
}
