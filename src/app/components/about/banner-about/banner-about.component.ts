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
  itemSelect: any;

  constructor(private _dataService: DataWebService) { }

  ngOnInit(): void {
    this.itemSelect = document.querySelectorAll('.item');
    this.getNosotros();
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

    this.cleanSelectItem();
    this.itemSelect[0].classList.add('select');

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
    this.cleanSelectItem();
    this.itemSelect[1].classList.add('select');
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
    this.cleanSelectItem();
    this.itemSelect[2].classList.add('select');
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
    this.cleanSelectItem();
    this.itemSelect[3].classList.add('select');
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

    this.cleanSelectItem();
    this.itemSelect[4].classList.add('select');
  }

  cleanSelectItem() {
    for (let i: number = 0; i < this.itemSelect.length; i++) {
      this.itemSelect[i].classList.remove('select');
    }
  }
}
