import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activities } from 'src/app/models/activities.interface';
import { ActivitiesServicesService } from 'src/app/services/activities-services.service';

@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.css']
})
export class ActivitiesDetailsComponent implements OnInit {
  activities: Array<Activities>;
  lastActivitie: Activities = {
    nombre: '',
    descripcion: '',
    fecha: '',
    dia: '',
    hora: '',
    id: '',
    ubicacion: {
      lugar: '',
      direccion: '',
    },
    imagen: ''
  };
  id: any;

  constructor(private _activitiesService: ActivitiesServicesService, private ruta: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params.id;
    this.getData()
      .then(res => {
        this.activities = res;
        this.lastActivitie = this.activities[this.id];
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
