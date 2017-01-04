import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { CashCashoutPage } from '../cash-cashout/cash-cashout';
import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Cash page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cash-cashcancel',
  templateUrl: 'cash-cashcancel.html'
})
export class CashCashcancelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashCashcancelPage');
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
