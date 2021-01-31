import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities.interface';
import { waitMe } from "waitme/waitMe";
import { DataWebService } from '../../../services/data-web.service';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-card-activities',
  templateUrl: './card-activities.component.html',
  styleUrls: ['./card-activities.component.css']
})
export class CardActivitiesComponent implements OnInit {
  activities: Array<Activities>;

  p: number = 1;
  pagination: any;
  constructor(private _service: DataWebService) { }

  ngOnInit(): void {

    this.pagination = document.querySelector('#control');
    this.loader();

    this.getData()
    .then(res=>{
      this.activities = res.data;
    });

  }

  getData():any {
    return new Promise((resolve,reject) => {
      this._service.getActivities().subscribe( item => {
        item.forEach(element=>{
          resolve(element.payload.doc.data());
        })
      })
    })
  }


  loader() {
    // $('#container').waitMe({
    //   effect: 'rotation',
    //   waitTime: -5,
    //   maxSize: 100,
    //   onClose: function () { }
    // });

    setTimeout(() => {
      $('#container').waitMe('hide');
      window.scrollTo(0, 0);
    }, 1500);
  }
}
