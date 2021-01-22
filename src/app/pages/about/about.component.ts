import { Component, OnInit } from '@angular/core';
import { DataWebService } from '../../services/data-web.service';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  datos: any[];

  constructor(private data: DataWebService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


  loader() {
    $('#content').waitMe({
      effect: 'rotation',
      waitTime: -5,
      maxSize: 100,
      onClose: function () { }
    });

    setTimeout(() => {
      $('#content').waitMe('hide');
    }, 2500);
  }

}
