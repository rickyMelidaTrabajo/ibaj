import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';
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

  articles: Array<Blog> = new Array();
  datos: Array<any>;
  // articlesView: Array<Blog> = new Array();

  // cantArticles: number;

  constructor(private dataBlog: DataWebService,) {  }

  ngOnInit(): void {
    window.scroll(0,0);
    this.dataBlog.getArticles()
    .subscribe(item => {
      this.datos = [];
      item.forEach((element, index) => {
        this.datos.push( element.payload.doc.data())
      })
    })

    setTimeout(() => {
      this.articles = this.datos[0].data;
      localStorage.removeItem('articles');
      localStorage.setItem('articles', JSON.stringify(this.articles));
    }, 2000);
  }

  // numArticles(event) {
  //   this.cantArticles = event.cantPaginas;
  //   console.log(event);
  // }

  getData() {
    this.articles = this.dataBlog.blog();
    console.log(this.articles);
  }
}
