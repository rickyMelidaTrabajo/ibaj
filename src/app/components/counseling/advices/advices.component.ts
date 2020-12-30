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

  constructor(private _data: DataWebService) {  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.obtener();
    }, 2000);
  }

  obtener() {
    this.data = this._data.consejos();
    this.data.shift();
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(this.data));
  }

}
