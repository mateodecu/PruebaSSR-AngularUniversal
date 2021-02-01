import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Planeta } from '../model/planeta'
import { ActivatedRoute } from '@angular/router'
import { OpenGraphService } from '../services/open-graph.service'

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  planeta: Planeta;
  cargado: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _openGraphService: OpenGraphService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this._dataService.getPlaneta(data['index']).subscribe((data: any) => {
        this.planeta = data;
        this.cargado = true;
        this._openGraphService.setOpenGraphTags(null, this.planeta.name, this.planeta.climate);
      })
    })
  }
}
