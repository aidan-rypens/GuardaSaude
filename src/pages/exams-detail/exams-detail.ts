import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

import { Exam } from '../../domain/exam';
import { ExamService } from '../../services/exam.service';
import { AuthService } from '../../services/auth.service';


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
  private photos: any;
  private currentUser: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService) {
    this.exam = navParams.get("exam");
    this.currentUser = this.authService.getTokenCurrentUser();
    console.log(this.exam);
  }

  ionViewDidLoad() {

    /*
    this.photos = [
      { "url": "../../assets/images/slider/slide1.jpg" }
    ]
    
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos
    });
    */

    //modal.present();

    this.getExamImages();
  }

  getExamStatusColor(status: string) {
    let border = this.examService.getExamStatusColor(status.toLowerCase());
    return border;
  }

  getExamImages() {
    this.examService.getExamImage(this.currentUser.userName, this.currentUser.token, 'GKS0004', 21217).subscribe(
      response => {
        this.photos = response.rows;
        console.log(this.photos);
      }
    );
  }
}
