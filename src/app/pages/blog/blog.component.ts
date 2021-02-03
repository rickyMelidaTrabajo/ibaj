import { Component, OnInit } from '@angular/core';
import { waitMe } from "waitme/waitMe";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ArticlesServicesService } from 'src/app/services/articles-services.service';

import { Comentario } from 'src/app/models/comentario.interface';
import { Blog } from 'src/app/models/blog.interface';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: Array<Blog>;
  otherArticles: Array<any> = new Array();
  id: any;
  lastArticle: Blog = {
    titulo: '',
    comentarios: new Array(),
    urlImagen: '',
    texto: '',
    autor: '',
    fecha: new Date,
    id: 0
  };
  indice: number;
  formGroup: FormGroup;
  dataComment: Array<Comentario> = new Array();
  existComment: boolean = false;

  constructor(
    private _articlesServices: ArticlesServicesService,
    private ruta: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.id = this.ruta.snapshot.params.id;
    this.indice = this.id;

    if (this.id == 'n') {
      this.indice = 0;
    }

    this.getData()
      .then(res => {
        this.articles = res.data;
        this.getOtherArticles();
        this.lastArticle = res.data[this.indice];
        this.dataComment = this.lastArticle.comentarios;

        if (this.dataComment.length != 0) {
          this.existComment = true;
        }
      });


    this.loader();
  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._articlesServices.getArticles().subscribe((item) => {
        item.forEach(element => {
          resolve(element.payload.doc.data());
        });
      });
    });
  }

  getOtherArticles() {
    for (let i: number = this.articles.length - 4; i < this.articles.length; i++) {
      this.otherArticles.push(this.articles[i]);
    }
  }

  otherArticle(id: number) {
    setTimeout(() => {
      location.reload();
    }, 500);
  }


  addComment() {
    this.dataComment.push(this.formGroup.value as any);
    this._articlesServices.addComment(this.formGroup.value).then((res) => {
      this.formGroup.reset();
      alert('Genial!');
    });
  }

  getComments(): any {
    return new Promise((resolve, reject) => {
      this._articlesServices.getComment().subscribe(item => {
        item.forEach(element => {
          resolve(element.payload.doc.data());
        });
        reject('No hay comentarios');
      });
    });
  }

  loader() {
    $('#container').waitMe({
      effect: 'rotation',
      waitTime: -5,
      maxSize: 100,
      onClose: function () { }
    });

    setTimeout(() => {
      $('#container').waitMe('hide');
      window.scrollTo(0, 0);
    }, 1500);
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      comment: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

}
