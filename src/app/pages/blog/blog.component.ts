import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.interface';
import { DataWebService } from 'src/app/services/data-web.service';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Array<any> = [1, 2, 3, 4, 5];
  articles: Array<Blog>;
  data: Blog;
  allData: Array<Blog>;
  all: boolean = false;
  id: any;

  constructor(private dataBlog: DataWebService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params.id;
    this.getData()
    .then(res=>{
      this.articles = res.data;

    });
  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this.dataBlog.getArticles().subscribe((item) => {
        item.forEach(element => {
          resolve(element.payload.doc.data());
        });
      });
    });
  }

}
