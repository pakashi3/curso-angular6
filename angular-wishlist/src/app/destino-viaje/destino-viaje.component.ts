import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViajes } from './../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destinos: DestinoViajes;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViajes>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

  ir() {
    this.clicked.emit(this.destinos);
    return false;
  }
}
