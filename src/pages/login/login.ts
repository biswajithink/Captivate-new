import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page1 } from '../page1/page1';
import { RegistrationPage } from '../registration/registration';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } 

  goHome() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(Page1);
  }
  goRegistration() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RegistrationPage);
  }

  /*onPageWillLeave() {
    this.app.getComponent('leftMenu').enable(true);
  }*/

}
