import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities.interface';
import { ActivitiesServicesService } from '../../../services/activities-services.service';

interface Actividades {
  actividades: Activities;
  id: string;
}

@Component({
  selector: 'app-card-activities',
  templateUrl: './card-activities.component.html',
  styleUrls: ['./card-activities.component.css']
})
export class CardActivitiesComponent implements OnInit {
  activities: Array<Activities>;
  data: Array<Actividades> = new Array();

  p: number = 1;
  id: Array<string> = new Array();
  constructor(private _activitiesService: ActivitiesServicesService) { }

  ngOnInit(): void {
    this.getData()
      .then(res => {
        this.activities = res;
        this.activities.forEach((value, index)=>{
          console.log(value);
        });

        console.log(this.data);
      });

  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._activitiesService.getActivities().subscribe((item) => {
        let datos = new Array;
        item.forEach(element => {
          datos.push(element.payload.doc.data());
          this.id.push(element.payload.doc.id);
          resolve(datos);
        });
      });
    });
  }
}
