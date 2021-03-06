import { UserNamePage } from './../pages/person/user-name/user-name';
import { BindPhoneNumberPage } from './../pages/person/bind-phone-number/bind-phone-number';
import { AvatarPage } from './../pages/person/avatar/avatar';
import { PrivacyPage } from './../pages/person/privacy/privacy';
import { AboutusPage } from './../pages/person/aboutus/aboutus';
import { PasswordManagePage } from './../pages/person/password-manage/password-manage';
import { SettingPage } from './../pages/person/setting/setting';
import { SegmentPage } from './../pages/segment/segment';
import { NavigationDetailPage } from './../pages/navigation-detail/navigation-detail';
import { NavigationPage } from './../pages/navigation/navigation';
import { CardsImagePage } from './../pages/cards-image/cards-image';
import { CardsListPage } from './../pages/cards-list/cards-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PersonPage} from "../pages/person/person";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginPage} from "../pages/login/login";
import {RegistPage} from "../pages/regist/regist";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonPage,
    LoginPage,
    RegistPage,
    CardsListPage,
    CardsImagePage,
    NavigationPage,
    NavigationDetailPage,
    SegmentPage,
    SettingPage,
    PasswordManagePage,
    AboutusPage,
    PrivacyPage,
    AvatarPage,
    BindPhoneNumberPage,
    UserNamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonPage,
    LoginPage,
    RegistPage,
    CardsListPage,
    CardsImagePage,
    NavigationPage,
    NavigationDetailPage,
    SegmentPage,
    SettingPage,
    PasswordManagePage,
    AboutusPage,
    PrivacyPage,
    AvatarPage,
    BindPhoneNumberPage,
    UserNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
