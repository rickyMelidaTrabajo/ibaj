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
    id:''
  };
  id: number;

  formGroup: FormGroup;
  dataComment: Array<Comentario> = new Array();
  existComment: boolean = false;

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

        this.checkComments();
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
    this.dataComment = this.consejo.comentarios;

    if (this.dataComment.length != 0) {
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

  addComment() {
    console.log(this.existComment);
    if(this.checkComments()) {
      this.dataComment.push(this.formGroup.value as any);
    }
    console.log(this.dataComment);
    this._dataCounseling.addComment(this.formGroup.value, this.id.toString())
    .then(res=>{
      alert('Excelente');
      this.formGroup.reset();
    });
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
