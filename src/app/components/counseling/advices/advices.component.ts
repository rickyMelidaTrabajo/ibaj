import { Component, OnInit } from '@angular/core';
import { DataWebService } from "../../../services/data-web.service";
@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  consejos: Array<any> = [ 1, 2, 3, 4, 5 ];
  data: any;

  constructor(private _data: DataWebService) { }

  ngOnInit(): void {
    this.obtener();
  }

  obtener() {
    this.data = this._data.consejos();
    console.log(this.data);
  }

}
