import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro = [];
  cliente: any;
  nombre: string;
  name: string;
  desc: string;
  tipo: string;
  edad: number;
  dui: number;
  contador: number;
  priDescu: number;
  Des: string;
  boquitas: string;
  gaseosa: string;
  sorbete: string;
  paletas: string;
  gomitas: string;
  opcionSeleccionado: string;
  unidades;
  n: number;
  x: number;
  constructor() { }

  ngOnInit(): void {
    this.edad = 0;
    this.nombre = '';
    this.contador = 0;
    this.unidades = ["Gaseosa", "Gomintas", "Boquitas", "Paletas", "Sorbete"];
    this.opcionSeleccionado = "Selecciona";
  }


  descuento(name) {

    return this.registro.find(function (pais) {
      return pais.dui === name;

    });
  }


  ingresar(name: string, descp: string) {
    this.name = name;
    this.desc = descp;
    this.n = this.registro.length;
    this.x = this.dui;
    var res = 0;
    for (var i = 0; i < this.n; i++)
      if (this.x == this.registro[i].dui)
        res++
    console.log(res);

    if (res <= 0) {
      this.tipo = 'No aplica descuento'
      this.cliente = { "nombre": this.nombre, "dui": this.dui, "codigo": this.name, "desc": this.desc, "tipo": this.tipo };
      this.registro.push(this.cliente);
      this.contador++;

    } else if (res > 0 && res <= 4) {
      this.tipo = 'Aplica descuento 5%'
      this.cliente = { "nombre": this.nombre, "dui": this.dui, "codigo": this.name, "desc": this.desc, "tipo": this.tipo };
      this.registro.push(this.cliente);
      this.contador++;

    } else {
      this.tipo = 'Aplica descuento 10%'
      this.cliente = { "nombre": this.nombre, "dui": this.dui, "codigo": this.name, "desc": this.desc, "tipo": this.tipo };
      this.registro.push(this.cliente);
      this.contador++;
    }
  }

  capturar() {
    switch (this.opcionSeleccionado) {
      case 'Gaseosa':
        this.gaseosa = "PR001-Gaseosa"
        this.Des = "Gaseosa de un litro, a un precio de: $1.50"
        this.ingresar(this.gaseosa, this.Des);
        break;
      case 'Gomintas':
        this.gomitas = "PR002-Gomintas"
        this.Des = "Tasa de Gomintas, a un precio de: $1.00"
        this.ingresar(this.gomitas, this.Des);
        break;
      case 'Boquitas':
        this.boquitas = "PR003-Boquitas"
        this.Des = "Boquitas, a un precio de: $1.50"
        this.ingresar(this.boquitas, this.Des);
        break;
      case 'Paletas':
        this.paletas = "PR004-Paletas"
        this.Des = "Una paleta de sabores, a un precio de: $1.75"
        this.ingresar(this.paletas, this.Des);
        break;
      case 'Sorbete':
        this.sorbete = "PR005-Sorbete"
        this.Des = "1/2 Galon, a un precio de: $4.50"
        this.ingresar(this.sorbete, this.Des);
        break;

    }
  }

}

