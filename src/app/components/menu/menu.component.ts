import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() fondo: boolean;

  value: boolean;
  valueShowIconMenu: boolean;

  constructor() {
  }

  ngOnInit(): void {
    let sizeWindow = screen.width;
    this.sizeInitial(sizeWindow);

    let size = window.matchMedia('(min-width: 1024px)');
    this.responsive(size);
    size.addListener(this.responsive);

  }

  responsive(size: any) {
    let main = document.querySelector('#main');
    let btnMenu = document.querySelector('#menu');
    let haeder = document.querySelector('#header');

    if (size) {
      main.classList.remove('main');
      main.classList.remove('ocultarMain');
      main.classList.add('main-desktop');
    } else {
      btnMenu.addEventListener('click', () => {
        if (this.value) {
          setTimeout(() => {
            this.valueShowIconMenu = false;
            haeder.classList.add('header');
            haeder.classList.remove('ocultaHeader');
          }, 850);
        } else {
          setTimeout(() => {
            this.valueShowIconMenu = true;
            haeder.classList.add('ocultaHeader');
            haeder.classList.remove('header');
          }, 850);
        }
      });
    }

  }

  sizeInitial(size:any) {

    let btnMenu = document.querySelector('#menu');
    let haeder = document.querySelector('#header');
    let main = document.querySelector('#main');

    setTimeout(() => {
      if (size >= 1024) {
        main.classList.remove('main');
        main.classList.remove('ocultarMain');
        main.classList.add('main-desktop');
      } else {

        btnMenu.addEventListener('click', () => {
          if (this.value) {
            setTimeout(() => {
              this.valueShowIconMenu = false;
              haeder.classList.add('header');
              haeder.classList.remove('ocultaHeader');
            }, 850);
          } else {
            setTimeout(() => {

              this.valueShowIconMenu = true;
              haeder.classList.add('ocultaHeader');
              haeder.classList.remove('header');
            }, 850);
          }
        });
      }
    }, 1);
  }

}
