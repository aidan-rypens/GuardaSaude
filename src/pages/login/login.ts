import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginService } from '../../services/login.service';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    console.log('Ophalen login...');
    console.log('Ophalen login gedaan...');
  }

}