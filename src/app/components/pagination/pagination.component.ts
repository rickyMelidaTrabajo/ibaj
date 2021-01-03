import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataPagination } from 'src/app/models/data-pagination.interface';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() data: DataPagination;
  @Output() pageSelect = new EventEmitter();
  addPage: Array<number> = new Array();

  constructor() { }

  ngOnInit(): void {
    console.log(`La cantidad de paginas es ${this.data.cantPages}`)
    this.addPages();
  }

  //Estos datos se enviar al componente home
  //que es el componente padre
  enviar(e) {
    this.pageSelect.emit({
      numArticles: this.data.numArticles,
      cantPages: this.data.cantPages,
      pageActual: this.data.pageActual,
      pageSolicitada: e.target.name,


    });
  }

  addPages() {
    for (let i = 1; i <= this.data.cantPages; i++) {
      this.addPage.push(i);
    }
  }

}
