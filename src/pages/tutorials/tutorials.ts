import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Tutorials page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html'
})
export class TutorialsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialsPage');
  }

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  
  features = {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' +  '</span>';
      }
    };

}
