import { Component } from '@angular/core';
import {  ViewController} from 'ionic-angular';

/*
  Generated class for the Popover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'popover.html'
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

close() {
    this.viewCtrl.dismiss();
  }
}
