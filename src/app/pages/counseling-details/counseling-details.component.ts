import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario.interface';
import { Consejos } from 'src/app/models/consejos.interface';
import { CounselingServiceService } from 'src/app/services/counseling-service.service';
import { waitMe } from "waitme/waitMe";
import * as jQuery from 'jquery';


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
    comentarios: [
      {
        comment: '',
        name: '',

      }
    ],
    id: ''
  };

  formGroup: FormGroup;
  dataComment = [];
  comments = new Array();
  existComment: boolean;
  otherC: Array<Consejos> = new Array();

  constructor(
    private ruta: ActivatedRoute,
    private _data: CounselingServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    jQuery('#box-notification').hide();
    this.buildForm();
    this.id = this.ruta.snapshot.params.id;

    this.getCounseling()
      .then(res => {
        this.data = res;
        this.consejo = this.data[this.id];
        this.setOtherCounseling();
      })
      .catch(error => {
      });

    this.getComment()
      .then(res => {
        this.dataComment = res[this.id].comment;
        this.dataComment == undefined ? this.existComment = false : this.existComment = true;
      }).catch(err => {
        this.existComment = false;
        console.log('No resolvio, entro en el catch');
      })

    this.loader();
  }

  getCounseling(): any {
    return new Promise((resolve, reject) => {
      this._data.getCounseling().subscribe(item => {
        let receivedData = new Array;
        item.forEach(element => {
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
    this.existComment ? this.dataComment.push(this.formGroup.value) : this.dataComment = [this.formGroup.value];
    this._data.addComment(this.dataComment, this.id).then(res => {
      this.formGroup.reset();
      this.showHideBoxNotificationOfCommentAdd();

    }).catch(err => {
      console.log('error');
    });
  }

  getComment() {
    return new Promise((resolve, reject) => {
      this._data.getComment().subscribe(item => {
        let receivedData = new Array;
        let id = new Array;
        item.forEach(element => {
          receivedData.push(element.payload.doc.data());
          id.push(element.payload.doc.id);
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
    jQuery('#container').waitMe({
      effect: 'rotation',
      waitTime: -5,
      maxSize: 100,
      onClose: function () { }
    });

    setTimeout(() => {
      jQuery('#container').waitMe('hide');
      window.scrollTo(0, 0);
    }, 1500);
  }

  showHideBoxNotificationOfCommentAdd() {
    const boxNotification = jQuery('#box-notification');
    boxNotification.show();

    setTimeout(() => {
      boxNotification.hide(1000);
    }, 3000)
  }

}
