import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-prayer-motive',
  templateUrl: './prayer-motive.component.html',
  styleUrls: ['./prayer-motive.component.css']
})
export class PrayerMotiveComponent implements OnInit {

  data:any = {
    nombre: 'Ricardo',
    email : 'ricardomelida92@gmail.com',
    peticion: 'Por un trabajo mejor'
  };

  constructor(private _prayerService: DataWebService) { }

  ngOnInit(): void {
    this.loader();
  }

  addData() {
    this._prayerService.addPrayer(this.data);
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
    }, 3000);
  }

}
