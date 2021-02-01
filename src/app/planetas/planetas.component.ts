import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Planeta } from '../model/planeta'
import { OpenGraphService } from '../services/open-graph.service'

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
    private _openGraphService: OpenGraphService
  ) { }

  ngOnInit(): void {
    this._dataService.getPlanetas().subscribe((data: any) => {
      this.planetas = data.results;
      this.cargado = true;
      this._openGraphService.setOpenGraphTags(null, 'Planetas de Star Wars', 'La lista de todos los planetas de Star Wars.');
    })
  }
}
