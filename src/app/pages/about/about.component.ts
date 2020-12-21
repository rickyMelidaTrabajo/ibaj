import { Component, OnInit } from '@angular/core';
import { DataWebService } from '../../services/data-web.service';

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

  getData() {
    console.log('sale')
    this.data.obtenerDatos();
  }

}
