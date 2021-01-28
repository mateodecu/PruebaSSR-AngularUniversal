import { Component, OnInit } from '@angular/core';
import { DataService, Planeta } from '../services/data.service'
import { ActivatedRoute } from '@angular/router'

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
    private _dataService: DataService
  ) {
    this.activatedRoute.params.subscribe( data => {
      this._dataService.getPlaneta(data['index']).subscribe( (data: any) => {
        this.planeta = data;
        this.cargado = true;
      })
    })
  }

  ngOnInit(): void {}
}