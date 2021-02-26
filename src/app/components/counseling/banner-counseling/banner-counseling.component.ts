import { Component, OnInit } from '@angular/core';
import { FirebaseStorageServiceService } from 'src/app/services/firebase-storage-service.service';
import { ImagesPortada } from "../../../models/images.interface";
import { waitMe } from "waitme/waitMe";

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-banner-counseling',
  templateUrl: './banner-counseling.component.html',
  styleUrls: ['./banner-counseling.component.css']
})
export class BannerCounselingComponent implements OnInit {

  images: any;
  urlImage: string;
  sizeDesktop: boolean = true;
  constructor(private imagesPortada: FirebaseStorageServiceService) { }

  ngOnInit(): void {
    this.loader();
    if(screen.width >= 1024) {
      this.sizeDesktop = false;
    }

    this.getImagePortada()
      .then(result => {
        this.images = result;
        this.urlImage = this.images.consejos[0];
        console.log(this.urlImage);
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

  getImagePortada() {
    return new Promise((resolve, reject) => {
      this.imagesPortada.getImagesPortada()
        .subscribe((item) => {
          item.forEach(element => {
            resolve(element.payload.doc.data());
          });
        });
    })
  }
}
