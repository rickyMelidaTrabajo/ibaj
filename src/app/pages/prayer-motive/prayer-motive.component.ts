import { Component, OnInit } from '@angular/core';
import { VersesService } from 'src/app/services/verses.service';
import { PrayerServiceService } from 'src/app/services/prayer-service.service';

import { waitMe } from "waitme/waitMe";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Versiculos } from '../../models/versiculos.interface';
import Swal from 'sweetalert2';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-prayer-motive',
  templateUrl: './prayer-motive.component.html',
  styleUrls: ['./prayer-motive.component.css']
})
export class PrayerMotiveComponent implements OnInit {

  versiculos: Array<Versiculos> = new Array();
  versiculoCabecera: Versiculos = {
    versiculo: '',
    pasaje: ''
  };
  dataPrayer: Array<any> = new Array();
  idPrayer: any;

  formGroup: FormGroup;

  constructor(
    private _prayerService: PrayerServiceService,
    private _versesService: VersesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.getData()
      .then(result => {
        this.idPrayer = result.length;
      });

    this.getVersos()
      .then((result) => {
        this.versiculos = result.oracion;
        this.versiculoCabecera = this.versiculos.shift();
      });
    this.loader();
  }

  addData() {
    this.dataPrayer.push(this.formGroup.value as any);
    this._prayerService.addPrayer(this.formGroup.value, this.idPrayer).then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: 'Se subio tu peticion de oracion'
      }).then((res)=> {
        if(res.value) {
          this.formGroup.reset();
        }
      });
    });
  }

  getData() {
    return new Promise((resolve, reject) => {
      this._prayerService.getPrayer().subscribe(item => {
        let data = [];
        item.forEach((dato: any) => {
          data.push({
            id: dato.payload.doc.id,
            data: dato.payload.doc.data()
          });
          resolve(data);
        })
      });
    })
  }

  getVersos(): any {
    return new Promise((resolve, reject) => {
      this._versesService.getVersiculos().subscribe(item => {
        item.forEach(element => {
          resolve(element.payload.doc.data());
        });
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
    }, 3000);
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      peticion: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
  }

}
