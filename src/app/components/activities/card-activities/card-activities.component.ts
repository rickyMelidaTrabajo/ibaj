import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities.interface';

@Component({
  selector: 'app-card-activities',
  templateUrl: './card-activities.component.html',
  styleUrls: ['./card-activities.component.css']
})
export class CardActivitiesComponent implements OnInit {
  activities: Array<Activities> = [
    {
      nombre: 'Festejo Dia de la Amistad',
      descripcion: 'Celebracion por el dia de los amigos',
      fecha: '30 de Julio',
      dia: 'Sabado',
      hora: '19:30',
      ubicacion: {
        lugar: 'Iglesia Bautista Panambi Reta',
        direccion: 'Avda Fernando de la Mora e/ Lopez Decoud'
      },
      imagen: '/assets/imagenes/actividades/act_1.jpg'
    },
    {
      nombre: 'Charla sobre Misiones',
      descripcion: 'Fin de semana hablamos misiones con el Pastor Misionero Juan Cruz',
      fecha: '02 de Agosto',
      dia: 'Sabado y Domingo',
      hora: '10:00',
      ubicacion: {
        lugar: 'Iglesia Bautista Panambi Reta',
        direccion: 'Avda Fernando de la Mora e/ Lopez Decoud'
      },
      imagen: '/assets/imagenes/actividades/act_2.jpg'

    },
    {
      nombre: 'Festejo Dia del Pastor',
      descripcion: 'Celebracion por el dia del Pastor',
      fecha: '29 de Setiembre',
      dia: 'Martes',
      hora: '19:30',
      ubicacion: {
        lugar: 'Iglesia Bautista Panambi Reta',
        direccion: 'Avda Fernando de la Mora e/ Lopez Decoud'
      },
      imagen: '/assets/imagenes/actividades/act_3.jpg'

    },
    {
      nombre: 'Cierre de Fin de Año y Evento de Navidad',
      descripcion: 'Cena de fin de año y eventos especiales preparados por niños, jóvenes y adultos de la Iglesia',
      fecha: '23 de Diciembre',
      dia: 'Sabado',
      hora: '19:30',
      ubicacion: {
        lugar: 'Iglesia Bautista Panambi Reta',
        direccion: 'Avda Fernando de la Mora e/ Lopez Decoud'
      },
      imagen: '/assets/imagenes/actividades/act_5.jpg'

    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
