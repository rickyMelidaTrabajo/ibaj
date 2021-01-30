import { Component, OnInit } from '@angular/core';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-banner-counseling',
  templateUrl: './banner-counseling.component.html',
  styleUrls: ['./banner-counseling.component.css']
})
export class BannerCounselingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
