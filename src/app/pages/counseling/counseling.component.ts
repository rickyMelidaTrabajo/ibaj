import { Component, OnInit } from '@angular/core';
import { DataWebService } from '../../services/data-web.service';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

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
    this.loader();

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
