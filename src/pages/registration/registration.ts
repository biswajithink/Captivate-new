import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page1 } from '../page1/page1';
/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  goHome() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(Page1);
  }

}
