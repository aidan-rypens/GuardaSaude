import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Exam } from '../../domain/exam';
import { environment } from '../../environments/environment';
import { saudeConfig } from '../../configurations/saudeConfig';

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
  private exams: Exam[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService) {
    this.currentUser = this.authService.getTokenCurrentUser();
  }

  loadExams() {
    this.examService.listExams(this.currentUser.userName, this.currentUser.token, saudeConfig.role_health_professional).subscribe(
      response => {
        this.exams = response.rows;
      } 
    );
  }

  ionViewDidLoad() {
    this.loadExams();
  }

  getExamStatusColor(status: string) {
    let color = this.examService.getExamStatusColor(status);

    return color;
  }

}
