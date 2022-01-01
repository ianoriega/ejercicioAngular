import { Injectable } from '@angular/core';
import { Persona } from './components/personas';
import { PERSONAS } from './components/personas';

@Injectable({
  providedIn: 'root'
})
export class RENAPERService {

  constructor() { }

  getPersonaByDni(dni:string) : Persona
  {
    var aux:Persona= {
      apellido:" ",
      nombres:" ",
      fechaNacimiento:" ",
      dni:" "
    };
    
    PERSONAS.forEach(element => {
      if(element.dni == dni)
        aux = element;
      }); 

    return aux;
  }
}

