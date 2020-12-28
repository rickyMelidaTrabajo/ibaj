import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';

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
  }

  addData() {
    this._prayerService.addPrayer(this.data);
  }

}
