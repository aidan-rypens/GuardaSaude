import { Component } from '@angular/core';
import { App, NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';

import { Exam } from '../../domain/exam';
import { environment } from '../../environments/environment';
import { saudeConfig } from '../../configurations/saudeConfig';

import { ExamService } from '../../services/exam.service';
import { AuthService } from '../../services/auth.service';
import { OrderPopoverService } from '../../services/orderpopover.service';

import { ExamsDetail } from '../exams-detail/exams-detail';

import { ExamsOrderPopover } from '../exams-order-popover/exams-order-popover';

import { ExamSearch } from '../../pipes/exam-search';
import { ExamOrder } from '../../pipes/exam-order';
import { ExamDate } from '../../pipes/exam-date';
import { ExamNames } from '../../pipes/exam-names';
import { ExamServicename } from '../../pipes/exam-servicename';

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
  private viewExams: Exam[];
  private searchQuery: string = '';
  private loader: any;


  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService, public popoverCtrl: PopoverController, public orderPopoverService: OrderPopoverService, public loadingCtrl: LoadingController) {
    this.currentUser = this.authService.getTokenCurrentUser();
    this.viewExams = [];

    this.loader = this.loadingCtrl.create({
      content: 'Logging in...'
    });

    this.loadExams();
  }

  loadExams() {
    this.examService.listExams(this.currentUser.userName, this.currentUser.token, saudeConfig.role_health_professional).subscribe(
      response => {
        this.exams = response.rows;

        if (this.exams.length > 3) {
          for (let i = 0; i < 3; i++) {
            this.viewExams.push(this.exams[i]);
          }
        } else {
          this.viewExams = this.exams;
        }

        this.loader.dismiss();
      }
    );
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

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ExamsOrderPopover);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      //console.log(popoverData);
    })
  }

  onInput(ev: any) {
    this.searchQuery = ev.target.value;
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {

      // REMOVE AFTER PRESENTATION
      let max = this.exams.length;
      for (let i = 0; i < max; i++) {
        this.exams.push(this.exams[i]);
      }// END REMOVE AFTER PRESENTATION

      if (this.viewExams.length + 3 <= this.exams.length) {
        for (let i = this.viewExams.length; i < this.viewExams.length + 3; i++) {
          this.viewExams.push(this.exams[i])
        }
      } else {
        this.viewExams = this.exams;
      }
      infiniteScroll.complete();
    }, 500);

  }
}
