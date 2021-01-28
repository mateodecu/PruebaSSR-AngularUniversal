import { Component, OnInit } from '@angular/core';
import { DataService, Planeta } from '../services/data.service'

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  planetas: Planeta[] = [];
  cargado: boolean = false;

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {
    this._dataService.getPlanetas().subscribe( (data: any) => {
      this.planetas = data.results;
      this.cargado = true;
    })
  }
}
