import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular'
import { ExamComment } from '../../domain/examComment';

import { AuthService } from '../../services/auth.service';
import { ExamService } from '../../services/exam.service';
import { DateTimeService } from '../../services/datetime.service';

import { ExamSearch } from '../../pipes/exam-search';
import { ExamOrder } from '../../pipes/exam-order';
import { ExamDate } from '../../pipes/exam-date';
import { ExamNames } from '../../pipes/exam-names';
import { ExamServicename } from '../../pipes/exam-servicename';

/**
 * Generated class for the ExamsComments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exams-comments',
  templateUrl: 'exams-comments.html',
})
export class ExamsCommentsPage {

  private newComment: string = "";
  private exid: string;
  private examComments: ExamComment[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authService: AuthService, public dateTimeService: DateTimeService, public examService: ExamService) {
    this.exid = navParams.get('exid');
    this.getExamComments(this.authService.getTokenCurrentUser().userName, this.authService.getTokenCurrentUser().token, this.exid)
  }

  getExamComments(username: string, token: string, exid: string) {
    this.examService.getExamComments(username, token, exid).subscribe(
      response => {
        this.examComments = response.comments;
      }
    );
  }

  clickAddComment() {
    let comment = new ExamComment(this.dateTimeService.getCurrentDateTime(), null, this.authService.getCurrentUserName(), this.newComment);
    this.examComments.unshift(comment);

    this.examService.postExamComment(this.authService.getCurrentUserName(), this.authService.getTokenCurrentUser().token, this.exid, this.newComment).subscribe(
      response => {

      }
    );

    this.newComment = "";
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
