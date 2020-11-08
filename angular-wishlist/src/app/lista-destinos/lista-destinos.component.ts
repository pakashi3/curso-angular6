import { Component, OnInit} from '@angular/core';
import { DestinoViajes } from './../models/destino-viaje.models';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViajes[];
  constructor() {
    this.destinos = [];
  }

  ngOnInit() {
  }
  
  guardar(n:string, u:string):boolean {
    this.destinos.push(new DestinoViajes(n, u));
    return false;
  }

  elegido(d: DestinoViajes) {
    this.destinos.forEach(function (x) {x.setSelected(false); });
    d.setSelected(true);
  }
}
