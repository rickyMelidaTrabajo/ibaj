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
      .subscribe(item => {
        item.forEach((element, index) => {
          this.datos = element.payload.doc.data();
        });
      });

    setTimeout(() => {
      localStorage.setItem('objetivos', JSON.stringify(this.datos));
      this.dataView = localStorage.getItem('objetivos');
    }, 2000)

  }

  getNosotros() {
    this._dataService.getNosotros()
      .subscribe(item => {
        item.forEach((element, index) => {
          this.datos = element.payload.doc.data();
        });
      });

    setTimeout(() => {
      localStorage.setItem('nosotros', JSON.stringify(this.datos));
      this.dataView = localStorage.getItem('nosotros');
    }, 2000);

  }

  getCreencias() {
    this._dataService.getCreencias()
      .subscribe(item => {
        item.forEach((element, index) => {
          this.datos = element.payload.doc.data();
        });
      });

    setTimeout(() => {
      localStorage.setItem('creencias', JSON.stringify(this.datos));
      this.dataView = localStorage.getItem('creencias');
    }, 2000);

  }

  getConfesionFe() {
    this._dataService.getConfesionFe()
      .subscribe(item => {
        item.forEach((element, index) => {
          this.datos = element.payload.doc.data();
        });
      });

    setTimeout(() => {
      localStorage.setItem('confesion', JSON.stringify(this.datos));
      this.dataView = localStorage.getItem('confesion');
    }, 2000);

  }

  getHorariosServicios() {
    this._dataService.getServicios()
      .subscribe(item => {
        item.forEach((element, index) => {
          this.datos = element.payload.doc.data();
        });
      });

    setTimeout(() => {
      localStorage.setItem('servicios', JSON.stringify(this.datos));
      this.dataView = localStorage.getItem('servicios');
    }, 2000);
  }
}
