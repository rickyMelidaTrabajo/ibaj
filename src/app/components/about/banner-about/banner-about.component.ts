import { Component, OnInit } from '@angular/core';
import { DataWebService } from "../../../services/data-web.service";
import { About } from "../../../models/about.interface";


@Component({
  selector: 'app-banner-about',
  templateUrl: './banner-about.component.html',
  styleUrls: ['./banner-about.component.css']
})
export class BannerAboutComponent implements OnInit {

  dataAbout: About;
  dataView: string;

  constructor(private _dataService: DataWebService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataAbout = this._dataService.obtenerDatos();
  }

  getMisionVision() {
    this.getData();
    let res: any;
    res = JSON.stringify(this.dataAbout.data.objetivos);
    this.dataView = res
  }

  getNosotros() {
    this.getData();
    let res: string;
    res = this.dataAbout.data.nosotros;
    this.dataView = res;
  }

  getCreencias() {
    this.getData();
    let res: string;
    res = this.dataAbout.data.creencias
    this.dataView = res;
  }

  getConfesionFe() {
    this.getData();
    let res: string;
    res = this.dataAbout.data.declaracionDeFe;
    this.dataView = res;
  }

  getHorariosServicios() {
    this.getData();
    let res: any;
    res = JSON.stringify(this.dataAbout.data.servicios);
    this.dataView = res;
  }
}
