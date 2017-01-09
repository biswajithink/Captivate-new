import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { PopoverPage } from '../pages/popover/popover';
import { Page1 } from '../pages/page1/page1';
import { AccountsWalletsPage } from '../pages/accounts-wallets/accounts-wallets';
import { AccountsCardPage } from '../pages/accounts-card/accounts-card';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from '../pages/history/history';
import { TransferPage } from '../pages/transfer/transfer';
import { TransferSelfPage } from '../pages/transfer-self/transfer-self';
import { PaymentsPage } from '../pages/payments/payments';
import { MerchantsPage } from '../pages/merchants/merchants';
import { AirtimePage } from '../pages/airtime/airtime';
import { CashCashcancelPage } from '../pages/cash-cashcancel/cash-cashcancel';
import { CashCashoutPage } from '../pages/cash-cashout/cash-cashout';
import { SettingsPage } from '../pages/settings/settings';
import { ReportsPage } from '../pages/reports/reports';
import { ReportsContinuedPage } from '../pages/reports-continued/reports-continued';
import { SettingshelpPage } from '../pages/settingshelp/settingshelp';
import { MakaePaymentPage } from '../pages/makae-payment/makae-payment';
import { TutorialsPage } from '../pages/tutorials/tutorials';
import { CalculatorPage } from '../pages/calculator/calculator';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';





@NgModule({
  declarations: [
    MyApp,
    Page1,
    PopoverPage,
    AccountsWalletsPage,
    AccountsCardPage,
    ProfilePage,
    HistoryPage,
    TransferPage,
    TransferSelfPage,
    PaymentsPage,
    MerchantsPage,
    AirtimePage,
    MakaePaymentPage,
    CashCashcancelPage,
    CashCashoutPage,
    SettingsPage,
    SettingshelpPage,
    ReportsPage,
    ReportsContinuedPage,
    TutorialsPage,
    CalculatorPage,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    PopoverPage,
    AccountsWalletsPage,
    AccountsCardPage,
    ProfilePage,
    HistoryPage,
    TransferPage,
    TransferSelfPage,
    PaymentsPage,
    MerchantsPage,
    AirtimePage,
    MakaePaymentPage,
    CashCashcancelPage,
    CashCashoutPage,
    SettingsPage,
    SettingshelpPage,
    ReportsPage,
    ReportsContinuedPage,
    TutorialsPage,
    CalculatorPage,
    LoginPage,
    RegistrationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
  
 
}

