import { Injectable } from '@angular/core';
import { Visita, VISITAS } from './components/visitas';

@Injectable({
  providedIn: 'root'
})

export class VisitasService {
  
  listaVisitas = VISITAS;

  constructor() { }

  agregarVisita(fecha:string, hora: string, visitado:string) : void
  {
    this.listaVisitas.push({
      id:(this.listaVisitas.length+1),
      fecha:fecha,
      hora:hora,
      visitado:visitado
    });
  }

}


