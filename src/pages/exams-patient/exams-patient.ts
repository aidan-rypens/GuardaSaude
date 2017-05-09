import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { Exam } from '../../domain/exam';
import { environment } from '../../environments/environment';
import { saudeConfig } from '../../configurations/saudeConfig';

import { ExamService } from '../../services/exam.service';
import { AuthService } from '../../services/auth.service';
import { ExamsDetail } from '../exams-detail/exams-detail';


/**
 * Generated class for the ExamsPatient page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exams-patient',
  templateUrl: 'exams-patient.html',
})
export class ExamsPatientPage {

  private currentUser: any;
  private exams: Exam[];

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService) {
    this.currentUser = this.authService.getTokenCurrentUser();
  }

  loadExams() {
    this.examService.listExams(this.currentUser.userName, this.currentUser.token, saudeConfig.role_patient).subscribe(
      response => {
        this.exams = response.rows;
      }
    );
  }

  ionViewDidLoad() {
    this.loadExams();
  }

  getExamStatusColor(status: string) {
    let border = this.examService.getExamStatusColor(status.toLowerCase());
    return border;
  }

  viewExamDetail(exam: Exam) {
    this.appCtrl.getRootNav().push(ExamsDetail, {
      "exam": exam
    });
  }
}
