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
  datos: any;
  p: number = 1;
  sizeDesktop: boolean;

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
}
