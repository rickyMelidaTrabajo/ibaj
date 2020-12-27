import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Array<any> = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
