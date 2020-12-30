import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.interface';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Array<any> = [1, 2, 3, 4, 5];
  articles: Array<Blog>;
  data: Blog;
  id: number;

  constructor( private dataBlog: DataWebService, private ruta: ActivatedRoute ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.id = this.ruta.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.articles = JSON.parse(localStorage.getItem('articles'));
    this.data = this.articles[this.id]
    console.log(this.data);
  }

}
