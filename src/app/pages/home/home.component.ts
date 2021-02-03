import { Component, OnInit } from '@angular/core';
import { DataPagination } from 'src/app/models/data-pagination.interface';
import { waitMe } from "waitme/waitMe";
import { ArticlesServicesService } from '../../services/articles-services.service';
import { Blog } from '../../models/blog.interface';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Array<Blog>;
  cantidadArticles: number;
  pageActive: number;
  cantidadPaginas: number;
  data: DataPagination;
  dataArticles: DataPagination;

  datos: any;

  constructor( private _articlesServices: ArticlesServicesService) { }

  ngOnInit(): void {
  }

  paginaSeleccionada(event) {
    this.dataArticles = event;
  }



}
