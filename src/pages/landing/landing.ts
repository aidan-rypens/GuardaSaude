import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { ExamsPage } from '../exams/exams';
import { LoginPage } from '../login/login';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the Landing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  exams = ExamsPage;
  login = LoginPage;
  settings = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  openPage(page) {
    if (page == this.settings) {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.setRoot(page);
    }
  }
}
