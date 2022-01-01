
import { Component, OnInit } from '@angular/core';
import { RENAPERService } from 'src/app/renaper.service';
import { VisitasService } from 'src/app/visitas.service';
import { Persona, Sector, SECTORES } from '../personas';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  NombreApellido:string = " ";
  Fecha:Date = new Date();
  FechaActual:string ="";
  HoraActual:string="";
  Sectores:Sector[]= SECTORES;
  IntegrantesSector:string[] =[];
  opcionSeleccionada:string=" ";
  flagDni:boolean=false;
  visitas = this.visitasService.listaVisitas;
  public pageChange: number;

  constructor(private renaperService: RENAPERService, private visitasService: VisitasService) 
  {
    this.fechaYHora();
    this.visitas = this.visitas.reverse();
    this.pageChange=0;
  }

  ngOnInit(): void {
    
  }

  /*
   *  Permite traer los datos de  una persona del servicio Renaper a partir del dni igresado 
   */
  getPersona()
  {
    var dni = (document.getElementById("txtDni") as HTMLInputElement).value;

    if(!isNaN(parseInt(dni)))
    {
      if(this.renaperService.getPersonaByDni(dni).dni == " ")
      {
        alert("DNI no encontrado, los DNI hardcodeados van del 30.000.000 al 30.000.019")
        this.flagDni=false;
      }   
      else
      {
        this.NombreApellido = this.renaperService.getPersonaByDni(dni).nombres +" "+
        this.renaperService.getPersonaByDni(dni).apellido;
        this.flagDni=true;
      }
    }
    else
    {
      alert("DNI debe contener solo numeros");
      this.flagDni=false;
    }
  }

  /*
   *  Permite configurar la hora y la fecha actual
   */
  fechaYHora(): void
  {
    var Dia:number = this.Fecha.getDate();
    var Mes:number = this.Fecha.getMonth(); 
    var Anio:number = this.Fecha.getFullYear();
    this.FechaActual = Dia+"/"+(Mes+1)+"/"+Anio;

    var Horas:number = this.Fecha.getHours();
    var Minutos:number = this.Fecha.getMinutes();
    //var Segundos:number = this.Fecha.getSeconds();
    this.HoraActual = Horas+":"+Minutos//+":"+Segundos;
  }

  
  /*
   *  Metodo que carga los integrantes de un sector seleccionado
   */
  extraerIntegrantes(): void
  {
    var auxListaDni:number[] = [];
    var auxPersonas:string[] = [];

    for(var i =0; i<this.Sectores.length;i++)
    {
      if((document.getElementById("selectSector") as HTMLSelectElement).selectedIndex == i+1)
      {
        auxListaDni = this.Sectores[i].integrantes;
      }
    }

    for (var i=0; i< auxListaDni.length; i++)
    {
      var nombre:string = this.renaperService.getPersonaByDni(auxListaDni[i].toString()).nombres
      var apellido:string= this.renaperService.getPersonaByDni(auxListaDni[i].toString()).apellido;
      auxPersonas[i] = nombre+" "+apellido;
    }

    this.IntegrantesSector= auxPersonas;
  }

  
  /*
   *  Permite agregar una visita al servicio de visitas
   */
  IngresarVisita():void
  {
    var visitado:string = ""; 

    if( this.flagDni &&
        (document.getElementById("txtTarIngreso") as HTMLInputElement).value.trim() != "" &&
        !isNaN(parseInt((document.getElementById("txtTarIngreso") as HTMLInputElement).value.trim())) &&
        (document.getElementById("selectSector") as HTMLSelectElement).selectedIndex > 0 &&
        (document.getElementById("selectVisita") as HTMLSelectElement).selectedIndex > 0                )
    {
      this.fechaYHora();

      for(var i=0; i<this.IntegrantesSector.length+1;i++)
      {
        if((document.getElementById("selectVisita") as HTMLSelectElement).selectedIndex == i)
        {
          visitado = this.IntegrantesSector[i-1];
          break;
        }
      }
      this.visitas = this.visitas.reverse();
      this.visitasService.agregarVisita(this.FechaActual,this.HoraActual,visitado)
      this.visitas = this.visitas.reverse();
    }
    else alert("ERROR. datos incorrectos");
  }
}
