import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';
import { DataPagination } from 'src/app/models/data-pagination.interface';
import { DataWebService } from 'src/app/services/data-web.service';

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
  datos: Array<any>;
  p: number = 1;

  constructor(private dataBlog: DataWebService) { }

  ngOnInit(): void {

    this.cantArticles = 3;

    this.dataBlog.getArticles()
      .subscribe(item => {
        this.datos = [];
        item.forEach((element, index) => {
          this.datos.push(element.payload.doc.data())
        })
      })

    setTimeout(() => {
      this.articles = this.datos[0].data;
      localStorage.removeItem('articles');
      localStorage.setItem('articles', JSON.stringify(this.articles));
    }, 2000);

  }
}
