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

  constructor(private dataBlog: DataWebService) { }

  ngOnInit(): void {

    this.cantArticles = 3;
    setTimeout(()=>{
      this.articles = JSON.parse(localStorage.getItem('articles'));
    }, 3000);
  }
}
