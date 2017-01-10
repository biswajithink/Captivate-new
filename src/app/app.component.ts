import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { AccountsCardPage } from '../pages/accounts-card/accounts-card';
import { TransferPage } from '../pages/transfer/transfer';
import { PaymentsPage } from '../pages/payments/payments';
import { CashCashoutPage } from '../pages/cash-cashout/cash-cashout';
import { SettingsPage } from '../pages/settings/settings';
import { ReportsPage } from '../pages/reports/reports';
import { SettingshelpPage } from '../pages/settingshelp/settingshelp';

import { LoginPage } from '../pages/login/login';







@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  

  pages: Array<{title: string, component: any, menuicon: string}>;
  icons: Array<string>;

  constructor(public platform: Platform, private menu: MenuController) {
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1, menuicon: 'ios-home'},
      { title: 'Accounts', component: AccountsCardPage, menuicon: 'ios-key'},
      { title: 'Transfer', component: TransferPage, menuicon: 'md-arrow-round-forward'},
      { title: 'Payments', component: PaymentsPage, menuicon: 'ios-card'},
      { title: 'Cash', component: CashCashoutPage, menuicon: 'md-cash'},
      { title: 'Settings', component: SettingsPage, menuicon: 'md-cog'},
      { title: 'Reports', component: ReportsPage, menuicon: 'ios-document'},
      { title: 'Help', component: SettingshelpPage, menuicon: 'md-help'},
      { title: 'Logout', component: LoginPage, menuicon: 'md-close'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
