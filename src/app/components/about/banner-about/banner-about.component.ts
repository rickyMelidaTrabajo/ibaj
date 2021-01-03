import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';
import { element } from 'protractor';


@Component({
  selector: 'app-banner-about',
  templateUrl: './banner-about.component.html',
  styleUrls: ['./banner-about.component.css']
})
export class BannerAboutComponent implements OnInit {


  dataAbout: any;
  dataView: any;
  datos: any;
  dataType: string;

  constructor(private _dataService: DataWebService) { }

  ngOnInit(): void {
  }


  getMisionVision() {
    this._dataService.getObjetivos()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos = element.payload.doc.data();
        localStorage.setItem('objetivos', JSON.stringify(this.datos));
      });
    });

    this.dataView = localStorage.getItem('objetivos');
  }

  getNosotros() {
    this._dataService.getNosotros()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos = element.payload.doc.data();
        localStorage.setItem('nosotros', JSON.stringify(this.datos));
      });
    });

    this.dataView = localStorage.getItem('nosotros');
  }

  getCreencias() {
    this._dataService.getCreencias()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos = element.payload.doc.data();
        localStorage.setItem('creencias', JSON.stringify(this.datos));
      });
    });

    this.dataView = localStorage.getItem('creencias');

  }

  getConfesionFe() {
    this._dataService.getConfesionFe()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos = element.payload.doc.data();
        localStorage.setItem('confesion', JSON.stringify(this.datos));
      });
    });
    this.dataView = localStorage.getItem('confesion');

  }

  getHorariosServicios() {
    this._dataService.getServicios()
    .subscribe( item => {
      item.forEach((element, index) => {
        this.datos = element.payload.doc.data();
        localStorage.setItem('servicios', JSON.stringify(this.datos));
      });
    });
    this.dataView = localStorage.getItem('confesion');
  }
}
