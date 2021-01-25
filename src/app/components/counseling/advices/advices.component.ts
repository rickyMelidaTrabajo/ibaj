import { Component, OnInit } from '@angular/core';
import { DataWebService } from "../../../services/data-web.service";
import { Consejos } from '../../../models/consejos.interface';
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


  constructor(private _data: DataWebService) {  }

  ngOnInit(): void {
    this.getData()
    .then(res => {
      this.data = res.data;
    })

  }

  getData():any {
    // this.data = this.datos.data;
    // localStorage.setItem('consejos', JSON.stringify(this.data));
    return new Promise((resolve, reject)=>{
      this._data.getconsejos()
      .subscribe(item => {
        item.forEach((element, index) => {
          resolve(element.payload.doc.data());
        });
      });
    });

  }

}
