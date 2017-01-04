import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';
import { AccountsCardPage } from '../accounts-card/accounts-card';
//import { AccountsWalletsPage } from '../accounts-wallets/accounts-wallets';
/*
  Generated class for the AccountsWallets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accounts-wallets',
  templateUrl: 'accounts-wallets.html'
})
export class AccountsWalletsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsWalletsPage');
  }

  goToAccountsWallets() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AccountsWalletsPage);
  } 
  
  goToAccountscard() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AccountsCardPage);
  }
  

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
