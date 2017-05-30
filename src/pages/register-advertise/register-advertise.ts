import { Component } from '@angular/core';
import { App, ViewController, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';
import { ExamsDetail } from '../../pages/exams-detail/exams-detail';
import { Exam } from '../../domain/exam';

import { LoginPage } from '../../pages/login/login';

import { ExamNames } from '../../pipes/exam-names';

/**
 * Generated class for the RegisterAdvertise page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register-advertise',
  templateUrl: 'register-advertise.html',
})
export class RegisterAdvertise {

  private registerChoice: boolean;
  private exam: Exam;

  private patient: string;
  private email: string;
  private password: string;

  private incorrectData: boolean;

  constructor(public appCtrl: App, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.exam = navParams.get("exam");
    this.incorrectData = false;
    this.patient = this.exam.patient;
  }

  registerClick() {
    //this.appCtrl._setRootNav(LoginPage);
    this.appCtrl.getRootNav().push(ExamsDetail, {
      "exam": this.exam
    }).then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    });
  }

  inputChanged() {
    this.incorrectData = false;
  }
}
