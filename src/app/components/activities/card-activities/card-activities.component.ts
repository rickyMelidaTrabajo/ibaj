import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities.interface';
import { ActivitiesServicesService } from '../../../services/activities-services.service';


@Component({
  selector: 'app-card-activities',
  templateUrl: './card-activities.component.html',
  styleUrls: ['./card-activities.component.css']
})
export class CardActivitiesComponent implements OnInit {
  activities: Array<Activities>;

  p: number = 1;
  constructor(private _activitiesService: ActivitiesServicesService) { }

  ngOnInit(): void {
    this.getData()
      .then(res => {
        console.log(res);
        this.activities = res;
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
