import { Component, OnInit } from '@angular/core';
import { DataWebService } from '../../services/data-web.service';

@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.css']
})
export class CounselingComponent implements OnInit {

  constructor( private _sale: DataWebService) { }

  ngOnInit(): void {
    console.log(this._sale.consejos());
    window.scrollTo(0, 0);

  }

}
