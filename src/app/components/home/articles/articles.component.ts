import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';
import { DataPagination } from 'src/app/models/data-pagination.interface';
import { DataWebService } from 'src/app/services/data-web.service';
import { Versiculos } from "src/app/models/versiculos.interface";
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

interface Data {
  data: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  @Input() dataArticle: DataPagination;

  articles: Array<Blog> = new Array();
  articlesView: Array<Blog> = new Array();
  cantArticles: number;
  datos: any;
  p: number = 1;
  sizeDesktop: boolean;
  versos: Array<Versiculos>;
  page:any;

  constructor(private _service: DataWebService) { }

  ngOnInit(): void {

    this.sizeDesktop = false;

    if (screen.width >= 1024) {
      this.sizeDesktop = true
    }

    this.cantArticles = 3;

    this.getData()
      .then(res => {
        this.articles = res.data;
      });

    this.getVersos()
    .then(res => {
      this.versos =  res.data;
      console.log(this.versos);
    });



  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._service.getArticles().subscribe((item) => {
        item.forEach(element => {
          resolve(element.payload.doc.data());
        });
      });
    });
  }

  getVersos():any {
    return new Promise((resolve, reject) => {
      this._service.getVersiculos().subscribe((item) => {
        item.forEach(element => {
          resolve(element.payload.doc.data());
        });
      });
    });
  }

  loader() {
    $('#container').waitMe({
      effect: 'rotation',
      waitTime: -5,
      maxSize: 100,
      onClose: function () { }
    });

    setTimeout(() => {
      $('#container').waitMe('hide');
      window.scrollTo(0, 400);
    }, 1500);
  }
}
