import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';
import { DataWebService } from 'src/app/services/data-web.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  articles: Array<Blog> = new Array();
  datos: any[];
  // articlesView: Array<Blog> = new Array();

  // cantArticles: number;

  constructor(private dataBlog: DataWebService,) {

  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.dataBlog.getArticles()
      .subscribe(
        item =>{
          this.datos = [];
          item.forEach( (element, index) =>{
            let elemento = element.payload;
            //elemento['id'] = element.key;
            this.datos[''] = element.payload.doc.data();
            // console.log(element.payload.doc.data().data);
            console.log(`hay elementos`)
            console.log(this.datos);
          })
        })

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
