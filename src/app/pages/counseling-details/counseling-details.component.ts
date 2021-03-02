import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario.interface';
import { Consejos } from 'src/app/models/consejos.interface';
import { CounselingServiceService } from 'src/app/services/counseling-service.service';
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-counseling-details',
  templateUrl: './counseling-details.component.html',
  styleUrls: ['./counseling-details.component.css']
})
export class CounselingDetailsComponent implements OnInit {
  data: Array<Consejos>;
  consejo: Consejos = {
    titulo: '',
    urlImagen: '',
    texto: '',
    autor: '',
    comentarios: [
      {
        comentario: '',
        nombre: ''
      }
    ],
    id: ''
  };
  id: number;

  formGroup: FormGroup;
  dataComment: Array<Comentario> = new Array();
  existComment: boolean = false;
  commentAdd: boolean = false;

  commentEmpty:boolean ;
  nameEmpty:boolean;

  otherC: Array<Consejos> = new Array();


  constructor(
    private ruta: ActivatedRoute,
    private _dataCounseling: CounselingServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.id = this.ruta.snapshot.params.id;

    this.getData()
      .then(res => {
        this.data = res;
        this.getOtherCounseling();
        this.consejo = this.data[this.id];

        if (this.checkComments()) {
          this.dataComment = this.consejo.comentarios;
        }
      })
      .catch(error => {
      });
    this.loader();
  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._dataCounseling.getconsejos().subscribe((item) => {
        let datos = new Array;
        item.forEach(element => {
          datos.push(element.payload.doc.data());
          resolve(datos);
        });
      });
    });
  }

  checkComments(): boolean {
    if (this.consejo.comentarios != undefined) {
      this.existComment = true;
    }

    return this.existComment;
  }

  getOtherCounseling() {
    for (let i: number = this.data.length - 4; i < this.data.length; i++) {
      this.otherC.push(this.data[i]);
    }
  }

  otherCounseling() {
    setTimeout(() => {
      location.reload();
    }, 500);
  }

  checkEmptyText(){
    if(this.formGroup.value.comentario != "") {
      this.commentEmpty = false;
    }else {
      this.commentEmpty = true;
    }

    if(this.formGroup.value.nombre != "") {
      this.nameEmpty = false;
    }else {
      this.nameEmpty = true;
    }
  }

  addComment() {
    this.checkEmptyText();

    if(!this.commentEmpty && !this.nameEmpty) {
      this.dataComment.unshift(this.formGroup.value as any);
      this._dataCounseling.addComment(this.dataComment, this.id.toString())
        .then(res => {
          this.commentAdd = true;
          this.formGroup.reset();
          this.dataComment;
        });
    }
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      comentario: ['', Validators.required],
      nombre: ['', Validators.required]
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

}
