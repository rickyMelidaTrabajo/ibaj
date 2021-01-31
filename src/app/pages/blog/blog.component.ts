import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.interface';
import { DataWebService } from 'src/app/services/data-web.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { waitMe } from "waitme/waitMe";

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
    urlImagen: '',
    texto: '',
    autor: '',
    fecha: new Date,
    id: 0,
    versiculo: '',
    pasaje: ''
  };
  indice: number;
  formGroup: FormGroup;
  dataComment: Array<any> = new Array();

  constructor(private dataBlog: DataWebService, private ruta: ActivatedRoute, private formBuilder: FormBuilder) { }

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
      });

    this.getData()
      .then((result) => {
        this.lastArticle = result.data[this.indice];
      });

    this.loader();
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

  getOtherArticles() {
    for (let i: number = this.articles.length - 4; i < this.articles.length; i++) {
      this.otherArticles.push(this.articles[i]);
    }
  }

  otherArticle(id: number) {
    console.log('el id es ', id)
    setTimeout(() => {
      location.reload();

    }, 500);
  }


  addComment() {
    this.dataComment.push(this.formGroup.value as any);
    this.dataBlog.addComment(this.formGroup.value).then((res)=>{
      this.formGroup.reset();
      alert('Genial!');
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
