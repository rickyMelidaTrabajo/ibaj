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
    this.loader();
  }

  paginaSeleccionada(event) {
    this.dataArticles = event;
  }

  loader() {
    $('#container').waitMe({
      effect: 'facebook',
      fontSize: '28px',
      bg: 'rgba(245, 241, 240, 0.7)',
      // waitTime: -7,
      onClose: function () { }
    });

    setTimeout(() => {
      $('#container').waitMe('hide');
      window.scrollTo(0, 0);
    }, 3000);
  }

}
