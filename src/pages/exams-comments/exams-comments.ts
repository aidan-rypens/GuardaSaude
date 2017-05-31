import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { ExamComment } from '../../domain/examComment';

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

  private examComments: ExamComment;
  private newComment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.examComments = navParams.get('examComments');
    console.log(this.examComments);
  }

}
