import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController  } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { AccountsWalletsPage } from '../accounts-wallets/accounts-wallets';
//import { AccountsCardPage } from '../accounts-card/accounts-card';

/*
  Generated class for the AccountsCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on 
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accounts-card',
  templateUrl: 'accounts-card.html'
})
export class AccountsCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsCardPage');
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
