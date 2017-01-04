import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { TransferAcceptedPage } from '../transfer-accepted/transfer-accepted';
import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Settingshelp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settingshelp',
  templateUrl: 'settingshelp.html'
})
export class SettingshelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingshelpPage');
  }

  goToTransferaccepted(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(TransferAcceptedPage);
}

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
 