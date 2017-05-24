import { Component } from '@angular/core';
import { App, NavController, NavParams, PopoverController } from 'ionic-angular';

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
  private searchQuery: string = '';

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService, public popoverCtrl: PopoverController, public orderPopoverService: OrderPopoverService) {
    this.currentUser = this.authService.getTokenCurrentUser();
  }

  loadExams() {
    this.examService.listExams(this.currentUser.userName, this.currentUser.token, saudeConfig.role_health_professional).subscribe(
      response => {
        this.exams = response.rows;

        // Ordering seed
        this.exams[0].patient = "Linda Tequila";
        this.exams[1].patient = "Helen Mertel";
        this.exams[2].patient = "Mattheus Fracht eagioam ieaogjim iaei giomaejagji amegji aemij";

        //this.exams[0].identification = "A";
        //this.exams[1].identification = "B";
        //this.exams[2].identification = "C";

        console.log(this.exams);
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
}
