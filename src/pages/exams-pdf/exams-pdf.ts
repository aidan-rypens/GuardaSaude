import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { Exam } from '../../domain/exam';


/**
 * Generated class for the ExamsPdf page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-exams-pdf',
  templateUrl: 'exams-pdf.html',
})
export class ExamsPdf {

  private url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.url = navParams.get("url");
    console.log(this.url);
  }
}