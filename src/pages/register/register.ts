import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExamsDetail } from '../../pages/exams-detail/exams-detail';
import { Exam } from '../../domain/exam';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private exam: Exam;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exam = navParams.get("exam");
  }
}
