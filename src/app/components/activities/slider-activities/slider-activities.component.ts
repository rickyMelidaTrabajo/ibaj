import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities.interface';
import { ActivitiesServicesService } from '../../../services/activities-services.service';
import { rejects } from 'assert';
import { FirebaseStorageServiceService } from '../../../services/firebase-storage-service.service';


@Component({
  selector: 'app-slider-activities',
  templateUrl: './slider-activities.component.html',
  styleUrls: ['./slider-activities.component.css']
})
export class SliderActivitiesComponent implements OnInit {

  images: Array<any> = new Array();
  activities: Array<Activities>;
  constructor( private _activitiesService: ActivitiesServicesService, private imagesStorage: FirebaseStorageServiceService) { }

  ngOnInit(): void {
    this.getData()
    .then((result) => {
      this.activities = result
      this.activities.forEach((value)=>{
        this.images.push(value.imagen);
      });
    });

  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._activitiesService.getActivities().subscribe((item) => {
        let datos = new Array;
        item.forEach(element => {
          datos.push(element.payload.doc.data());
          resolve(datos);
        });
      });
    });
  }


}
