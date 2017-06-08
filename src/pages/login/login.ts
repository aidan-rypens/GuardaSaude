import { Component, Input } from '@angular/core';
import { App, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { ClientConfigService } from '../../services/clientconfig.service';

import { ExamsDetail } from '../exams-detail/exams-detail';
import { RegisterAdvertise } from '../register-advertise/register-advertise';

import { LandingPage } from '../../pages/landing/landing';
import { Dialogs } from '@ionic-native/dialogs';

import { ExamService } from '../../services/exam.service';
import { Exam } from '../../domain/exam';

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

  private user: string;
  private password: string;
  private incorrectCredentials: boolean;
  private loader: any;
  private rememberMe: boolean = false;

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private dialogs: Dialogs, private examService: ExamService, public loadingCtrl: LoadingController) {
    this.incorrectCredentials = false;

    this.loader = this.loadingCtrl.create({
      content: 'Logging in...'
    });

  }

  private loginResult: any = {};


  onLoginClick() {
    this.loader.present();

    this.authService.login(this.user, this.password).subscribe(
      response => {
        if (response) {
          if (this.rememberMe) {
            localStorage.setItem('rememberMe', 't');
            localStorage.setItem('rememberUser', this.user);
            localStorage.setItem('rememberPassword', this.password);
          };

          this.navCtrl.setRoot(LandingPage);
        } else {
          this.checkIndividualExam(this.user, this.password);
        }
        this.loader.dismiss();
      }
    )
  }

  onRememberMeClick() {
    if (this.rememberMe == true) {
      this.rememberMe = false;
      localStorage.setItem('rememberMe', 'f');
    } else {
      this.rememberMe = true;
      localStorage.setItem('rememberMe', 't');
    }
  }

  checkIndividualExam(exid: string, epasscode: string) {
    this.examService.getIndividualExam(exid, epasscode).subscribe(
      response => {
        if (response.result == "error") {
          this.incorrectCredentials = true;
        } else {
          this.goToIndividualExam(response.rows[0]);
        }
      }
    );
  }

  goToIndividualExam(exam: Exam) {
    this.appCtrl.getRootNav().push(RegisterAdvertise, {
      "exam": exam
    });
  }

  onForgotPasswordClick() {
    this.dialogs.prompt('Enter your email', 'Password Recovery');;
  }

  ionViewDidLoad() {
    if (localStorage.getItem('rememberMe') == 't') {
      this.rememberMe = true;
      this.user = localStorage.getItem('rememberUser');
      this.password = localStorage.getItem('rememberPassword');
    }
  }

  inputChanged() {
    this.incorrectCredentials = false;
  }
}
