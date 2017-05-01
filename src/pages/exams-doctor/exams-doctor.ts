import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Exam } from '../../domain/exam';

import { ExamService } from '../../services/exam.service';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the ExamsDoctor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exams-doctor',
  templateUrl: 'exams-doctor.html',
})
export class ExamsDoctorPage {

  private currentUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService) {
    this.currentUser = this.authService.getTokenCurrentUser();
  }

  ionViewDidLoad() {
  }

  loadExams() {
    this.examService.listExams(this.currentUser.userName, this.currentUser.token).subscribe(
      response => {
        console.log(response);
      } 
    );
  }

}
