import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Calculator page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
