import { Component, OnInit } from '@angular/core';
import { DataPagination } from 'src/app/models/data-pagination.interface';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Array<any>;
  cantidadArticles: number;
  pageActive: number;
  cantidadPaginas: number;
  data: DataPagination;
  dataArticles: DataPagination;

  constructor() { }

  ngOnInit(): void {
    this.pageActive = 1;
    this.articles = JSON.parse(localStorage.getItem('articles'));
    this.cantidadArticles = this.articles.length;
    this.cantidadPaginas = Math.ceil(this.articles.length / 3);

    this.data = {
      numArticles: this.cantidadArticles,
      cantPages: this.cantidadPaginas,
      pageActual: this.pageActive,
      pageSolicitada: this.pageActive,
    }

  }

  paginaSeleccionada(event) {
    this.dataArticles = event;
  }



}
