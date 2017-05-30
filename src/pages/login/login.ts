import { Component, Input } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

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

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private dialogs: Dialogs, private examService: ExamService) {
    this.incorrectCredentials = false;
  }

  private loginResult: any = {};


  onLoginClick() {

    //testing
    this.user = "DUN1034230";
    this.password = "20051972";

    this.authService.login(this.user, this.password).subscribe(
      response => {
        if (response) {
          this.navCtrl.setRoot(LandingPage);
        } else {
          this.checkIndividualExam(this.user, this.password);
        }
      }
    )
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
  }

  inputChanged() {
    this.incorrectCredentials = false;
  }
}
