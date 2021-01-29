import { Component, OnInit } from '@angular/core';
import { DataPagination } from 'src/app/models/data-pagination.interface';
import { waitMe } from "waitme/waitMe";
import { DataWebService } from '../../services/data-web.service';
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

  constructor( private _data: DataWebService) { }

  ngOnInit(): void {

    this._data.getArticles().subscribe((element)=>{
      element.forEach((item, index)=>{
        this.datos = item.payload.doc.data();
      })
    });

    setTimeout(()=>{
      this.articles = this.datos.data;
      localStorage.setItem('articles', JSON.stringify(this.articles));

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

    }, 2000);
  }

  paginaSeleccionada(event) {
    this.dataArticles = event;
  }



}
