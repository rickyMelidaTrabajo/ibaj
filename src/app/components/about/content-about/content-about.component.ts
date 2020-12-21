import { Component, Input, OnInit } from '@angular/core';
import { Objetivos } from 'src/app/models/objetivos.interface';
import { Servicios } from 'src/app/models/servicios.interface';

@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.css']
})
export class ContentAboutComponent implements OnInit {

  @Input() data: string;
  servicios: Servicios;
  misionVision: Objetivos;
  dataView: any;
  dataType: string;

  constructor() { }

  ngOnInit(): void {
    this.testData();
  }

  testData() {
    let firstChar: string;
    let res: any;
    //Leemos el primer caracter para ver si tenemos un objeto
    firstChar = this.data.substr(0, 1);
    if (firstChar === '{') {
      //Leemos el segundo caracter para saber a que objeto pertenece
      let secondChar = this.data.substr(1, 2);

      if (secondChar === 'M') {
        this.misionVision = JSON.parse(this.data);
        res = this.misionVision;
      } else {
        this.servicios = JSON.parse(this.data);
        res = this.servicios;
      }
    } else {
      res = this.data;
    }
    this.dataType = typeof(res);

    console.log(`El tipo de dato es ${this.dataType}`);
  }

  tipoObjeto() {

  }


}
