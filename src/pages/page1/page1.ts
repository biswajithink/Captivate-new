import { Component } from '@angular/core';

import { NavController , NavParams, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    
  }
  goToProfile() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProfilePage);
  }

    goToHistory() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(HistoryPage);
  }
  
   
 
presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}