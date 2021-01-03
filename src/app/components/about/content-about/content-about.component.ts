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
  dataView: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(JSON.parse(this.data))
  }

  testData(data): string {
    let res = JSON.parse(data);
    this.dataView = res.data;

    return res.dataType;
  }

  getServicios(data:Servicios): Servicios {
    return data;
  }

  getObjetivos(data: Objetivos): Objetivos {
    return data;
  }

  getAll(data: string):string {
    return data;
  }



}
