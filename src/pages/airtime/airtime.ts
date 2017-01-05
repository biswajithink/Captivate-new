import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';

import { PaymentsPage } from '../payments/payments';
import { MerchantsPage } from '../merchants/merchants';
import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Airtime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-airtime',
  templateUrl: 'airtime.html'
})
export class AirtimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirtimePage');
  }

presentLoading(){
        let loading = this.loadingCtrl.create({
        content: "<b>Payment Success</b>",
        duration: 3000
        });
        loading.present();
    }
    
  goToPayments(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(PaymentsPage);
  }
  goToMerchants(){
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(MerchantsPage);
  }
  goToAirtime(){
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(AirtimePage);
  }

  presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
    }


}
