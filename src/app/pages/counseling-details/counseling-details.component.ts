import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario.interface';
import { Consejos } from 'src/app/models/consejos.interface';
import { CounselingServiceService } from 'src/app/services/counseling-service.service';
import { waitMe } from "waitme/waitMe";
import { element } from 'protractor';

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
  id: number;
  consejo: Consejos = {
    titulo: '',
    urlImagen: '',
    texto: '',
    autor: '',
    id:''
  };

  formGroup: FormGroup;
  dataComment: Array<Comentario> = new Array();
  existComment: boolean;
  otherC: Array<Consejos> = new Array();

  constructor(
    private ruta: ActivatedRoute,
    private _data: CounselingServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.id = this.ruta.snapshot.params.id;

    this.getData()
      .then(res => {
        this.data = res;
        this.consejo = this.data[this.id];
        this.setOtherCounseling();
      })
      .catch(error => {
      });

      this.getComment()
        .then(res=>{
          this.existComment = true;
          this.dataComment = res[0].comment;
        }).catch(err=>{
          this.existComment = false;
          console.log(`Error`);
        })

      this.loader();
  }

  getData(): any {
    return new Promise((resolve, reject) => {
      this._data.getCounseling().subscribe(item=>{
        let receivedData = new Array;
        item.forEach(element=>{
          receivedData.push(element.payload.doc.data());
          resolve(receivedData);
        })
      })
    });
  }

  setOtherCounseling() {
    for (let i: number = this.data.length - 4; i < this.data.length; i++) {
      this.otherC.push(this.data[i]);
    }
  }

  addComment() {
    this.dataComment.push(this.formGroup.value as any);
    this._data.addComment(this.dataComment, this.id).then(res=>{
        alert('Genial!');
        this.formGroup.reset();

    }).catch(err=>{
      console.log('error');
    });
  }

  getComment() {
    return new Promise((resolve, reject)=>{
      this._data.getComment().subscribe(item=>{
        let receivedData = new Array;
        item.forEach(element=>{
          receivedData.push(element.payload.doc.data());
          resolve(receivedData);
        })
      })
    })
  }

  loadOtherCounseling() {
    setTimeout(() => {
      location.reload();
    }, 500);
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
