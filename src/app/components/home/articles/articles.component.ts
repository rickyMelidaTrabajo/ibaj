import { Component, Input, OnInit } from '@angular/core';
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
      this.dataView(this.cantArticles);
    }, 2000);

  }


  dataView(cantAricles: number) {
    // let startView = (this.dataArticle.pageActual * this.cantArticles) + 1;
    // let lastView = this.cantArticles * this.dataArticle.pageSolicitada;

    for (let i = 0; i < cantAricles; i++) {
      this.articlesView.push(this.articles[i]);
    }

    console.log(this.dataArticle);
    // console.log(`Va a empezar desde el ${startView} hasta el ${lastView} `)
  }

  refresh() {

    // console.log(`Va a mostrar desde ${startView} hasta ${lastView}`);
    // for(let i=startView;i<=lastView;i++) {

      // this.articlesView = new Array();
      //this.articlesView.push(this.articles[i]);


  }
}
