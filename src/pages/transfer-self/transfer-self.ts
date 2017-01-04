import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';


import { PopoverPage } from '../popover/popover';
import { TransferPage } from '../transfer/transfer';
/*
  Generated class for the TransferSelf page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transfer-self',
  templateUrl: 'transfer-self.html'
})
export class TransferSelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferSelfPage');
  }

  goToContact(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(TransferPage);
}

  goToSelf(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(TransferSelfPage);
}

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
