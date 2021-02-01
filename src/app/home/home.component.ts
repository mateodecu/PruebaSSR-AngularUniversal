import { Component, OnInit } from '@angular/core';
import { OpenGraphService } from '../services/open-graph.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _openGraphService: OpenGraphService
  ) { }

  ngOnInit(): void {
    this._openGraphService.setOpenGraphTags(null, 'Bienvenido a Star Wars App', 'Aquí encontrará toda la información de personajes y planetas del universo Star Wars.');
  }

}
