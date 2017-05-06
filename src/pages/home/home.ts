import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { ExamsPage } from '../exams/exams';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage = HomePage;
  landing = LandingPage;
  about = AboutPage;
  login = LoginPage;
  exams = ExamsPage;

  constructor(public navCtrl: NavController) {
  }

  openPage(p) {
    this.rootPage = p;
  }
}