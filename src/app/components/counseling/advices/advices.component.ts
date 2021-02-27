import { Component, OnInit } from '@angular/core';
import { CounselingServiceService } from "../../../services/counseling-service.service";
import { Consejos } from '../../../models/consejos.interface';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  consejos: Array<any> = [ 1, 2, 3, 4, 5 ];
  data: Array<Consejos>;
  datos: any;
  p: number = 1;
  pagination: any;

  constructor(private _dataCounseling: CounselingServiceService) {  }

  ngOnInit(): void {
    this.getData()
    .then(res => {
      this.data = res;
    })
    .catch(error =>{
      console.log(error);
    });

    this.pagination = document.querySelector('#control');
    this.pagination.addEventListener('click', this.loader);

  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._dataCounseling.getconsejos().subscribe((item) => {
        let datos = new Array;
        item.forEach(element => {
          datos.push(element.payload.doc.data());
          resolve(datos);
        });
      });
    });
  }

  loader() {
    $('#container').waitMe({
      effect: 'rotation',
      waitTime: -5,
      maxSize: 100,
      onClose: function () { }
    });

    setTimeout(() => {
      $('#container').waitMe('hide');
      window.scrollTo(0, 700);
    }, 1500);
  }

}
