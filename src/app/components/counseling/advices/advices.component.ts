import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  consejos: Array<any> = [ 1, 2, 3, 4, 5 ]
  constructor() { }

  ngOnInit(): void {
  }

}
