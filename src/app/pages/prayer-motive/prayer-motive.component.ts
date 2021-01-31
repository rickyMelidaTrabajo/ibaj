import { Component, OnInit } from '@angular/core';
import { DataWebService } from 'src/app/services/data-web.service';
import { waitMe } from "waitme/waitMe";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Versiculos } from '../../models/versiculos.interface';

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

  formGroup: FormGroup;

  constructor(private _prayerService: DataWebService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();

    this.getVersos()
    .then((result) => {
      this.versiculos = result.oracion;
      this.versiculoCabecera = this.versiculos.shift();
    });
    this.loader();
  }

  addData() {
    this.dataPrayer.push(this.formGroup.value as any);
    this._prayerService.addPrayer(this.formGroup.value).then((res)=>{
      this.formGroup.reset();
      alert('Genial!');
    });
  }

  getVersos():any {
    return new Promise((resolve, reject)=>{
      this._prayerService.getVersiculos().subscribe(item=>{
        item.forEach(element=>{
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
      email: ['', Validators.required]
    });
  }

}
