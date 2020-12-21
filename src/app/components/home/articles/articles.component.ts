import { Component, OnInit } from '@angular/core';

interface Article {
  principlaTitle: String;
  subTitle: string;
  content: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  articles: Array<Article> = new Array();
  articlesView: Array<Article> = new Array();

  cantArticles: number;

  constructor() { }

  ngOnInit(): void {
    //agregamos datos a todos nuestros articulos
    for (let i = 1; i <= 20; i++) {
      this.articles.push({
        principlaTitle: "Editorial N°"+i,
        subTitle: "Una Iglesia que crece",
        content: "Una iglesia que crece, tiene que apredender a escuchar a Dios y creerle. Creerle a Dios implica aceptar Su palabra y entregarse para hacer su voluntad. Esto trae consigo.."
      });

    }


    setTimeout(()=> {
      //Agregamos los articulos que se van a mostrar
      for (let i = 0; i < this.cantArticles; i++) {
        this.articlesView.push({
          principlaTitle: this.articles[i].principlaTitle,
          subTitle: this.articles[i].subTitle,
          content: this.articles[i].content
        });
      }
    }, 100);
    setTimeout(()=>{

      console.log(this.articles);
    }, 1000)

  }

  numArticles(event) {
    this.cantArticles = event.cantPaginas;
    console.log(event);
  }
}
