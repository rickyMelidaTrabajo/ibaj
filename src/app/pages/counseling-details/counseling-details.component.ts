import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consejos } from 'src/app/models/consejos.interface';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-counseling-details',
  templateUrl: './counseling-details.component.html',
  styleUrls: ['./counseling-details.component.css']
})
export class CounselingDetailsComponent implements OnInit {
  data: Array<Consejos>;
  consejo: Consejos;
  id: number;

  constructor(private ruta: ActivatedRoute, private _data: DataWebService) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data'));
    this.obtener();
    window.scrollTo(0, 0);
  }

  obtener() {
    this.id = this.ruta.snapshot.params.id;
    this.consejo = this.data[this.id-1];
  }

}
