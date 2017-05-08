import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Exam } from '../../domain/exam';

/**
 * Generated class for the ExamsDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exams-detail',
  templateUrl: 'exams-detail.html',
})
export class ExamsDetail {

  private exam: Exam;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
