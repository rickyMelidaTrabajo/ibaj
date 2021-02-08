import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario.interface';
import { Consejos } from 'src/app/models/consejos.interface';
import { DataWebService } from 'src/app/services/data-web.service';
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
    id:''
  };
  id: number;

  formGroup: FormGroup;
  dataComment: Array<Comentario> = new Array();
  existComment: boolean;

  otherC: Array<Consejos> = new Array();


  constructor(
    private ruta: ActivatedRoute,
    private _data: DataWebService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.id = this.ruta.snapshot.params.id;

    this.getData()
      .then(res => {
        this.data = res.data;
        this.consejo = this.data[this.id];
        this.getOtherCounseling();
      })
      .catch(error => {
      });
      this.loader();
  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._data.getconsejos()
        .subscribe(item => {
          item.forEach((element, index) => {
            resolve(element.payload.doc.data());
          });
        });
    });
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
    this.dataComment.push(this.formGroup.value as any);
    // this._data.addComment(this.formGroup.value).then((res) => {
    //   this.formGroup.reset();
    //   alert('Genial!');
    // });
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      comment: ['', Validators.required],
      name: ['', Validators.required]
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
