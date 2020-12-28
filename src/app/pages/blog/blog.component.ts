import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Array<any> = [1, 2, 3, 4, 5];

  constructor( private dataBlog: DataWebService ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  getData() {
    console.log(this.dataBlog.blog());
  }

}
