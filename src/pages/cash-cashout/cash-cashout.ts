import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { CashCashcancelPage } from '../cash-cashcancel/cash-cashcancel';
import { PopoverPage } from '../popover/popover';
/*
  Generated class for the CashCashout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cash-cashout',
  templateUrl: 'cash-cashout.html'
})
export class CashCashoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashCashoutPage');
  }

  goToCashout(){
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(CashCashoutPage);
  }

    goToCashcancel(){
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(CashCashcancelPage);
  }

  presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
    }
}
