import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {}

  private model: any = {};
  private loginResult: any = {};

  private email: any = {};
  private password: any = {};

  onLoginClick() {
    // For testing
    this.email='ZG9jdG9y';
    this.password='dGVzdGU=';
    this.model.email = this.email;
    this.model.password = this.password;

    this.authService.login(this.model.email, this.model.password).subscribe(
      response => {
        if (response) {
          console.log('Login: OK');
        } else {
          console.log('Login: Failed');
        }
      }
    )

  }

  ionViewDidLoad() {
  }
}
