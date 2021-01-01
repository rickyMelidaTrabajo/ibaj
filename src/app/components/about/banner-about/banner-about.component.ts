import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';


@Component({
  selector: 'app-banner-about',
  templateUrl: './banner-about.component.html',
  styleUrls: ['./banner-about.component.css']
})
export class BannerAboutComponent implements OnInit {

  dataAbout: any;
  dataView: string;
  datos: Array<any>;
  dataType: string;

  constructor(private _dataService: DataWebService) { }

  ngOnInit(): void {
    this.datos = [];
  }


  getMisionVision() {
    this.datos = [];
    this._dataService.getObjetivos()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos.push( element.payload.doc.data());
      });
    });
    console.log(this.datos);

  }

  getNosotros() {
    this.datos = [];
    this._dataService.getNosotros()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos.push( element.payload.doc.data());
        this.datos.push('algo')
      });
    });

    console.log(this.datos);

  }

  getCreencias() {
    this.datos = [];
    this._dataService.getCreencias()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos.push( element.payload.doc.data());
      });
    });
    console.log(this.datos);

  }

  getConfesionFe() {
    this.datos = [];
    this._dataService.getConfesionFe()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos.push( element.payload.doc.data());
      });
    });
    console.log(this.datos);

  }

  getHorariosServicios() {
    this.datos = [];
    this._dataService.getServicios()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos.push( element.payload.doc.data());
      });
    });

    console.log(this.datos);
  }
}
