import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';
//import { DragulaModule, DragulaService} from "../../../node_modules/ng2-dragula/ng2-dragula";
/*
  Generated class for the MakaePayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-makae-payment',
  templateUrl: 'makae-payment.html',
  //directives: [DragulaModule],
  //providers: [DragulaService],
}) 
export class MakaePaymentPage {
   /*q1 = [];
    q2 = [];*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController/*, private dragulaService: DragulaService*/) {

     /*for (var i = 0; i < 20; i++) {
      this.q1.push("1. <" + i + ">");
      this.q2.push("2. <" + i + ">");
    }
    dragulaService.drop.subscribe((value) => {
      
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakaePaymentPage');
  }

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
