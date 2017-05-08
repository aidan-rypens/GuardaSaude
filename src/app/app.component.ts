import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { ExamsPage } from '../pages/exams/exams';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, iconUrl: any, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Login', iconUrl:'../assets/images/icons/home.png', component: LoginPage },
      { title: 'Home', iconUrl:'../assets/images/icons/home.png', component: LandingPage },
      { title: 'Exams', iconUrl:'../assets/images/icons/home.png', component: ExamsPage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}