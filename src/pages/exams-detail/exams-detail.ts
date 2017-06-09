import { Component } from '@angular/core';
import { App, ModalController, NavController, NavParams } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

import { ExamsPdf } from './../exams-pdf/exams-pdf';
import { ExamsPacs } from '../../pages/exams-pacs/exams-pacs';

import { Exam } from '../../domain/exam';
import { ExamImg } from '../../domain/examImg';
import { ExamComment } from '../../domain/examComment';

import { ExamService } from '../../services/exam.service';
import { AuthService } from '../../services/auth.service';
import { ExamDate } from '../../pipes/exam-date';

import { ExamsCommentsPage } from '../exams-comments/exams-comments';

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
  private examImages: ExamImg[];
  private currentUser: any;
  private modalPhotos: any[];
  private showImages: boolean;
  private userRoles: string[];
  private showComments: boolean = false;

  constructor(public appCtrl: App, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private examService: ExamService, private authService: AuthService) {
    this.exam = navParams.get("exam");
    this.currentUser = this.authService.getTokenCurrentUser();
    this.examImages = [];
    this.modalPhotos = [];
    this.showImages = false;

    this.userRoles = this.authService.getCurrentUserRoles();
    if (this.userRoles.some(x => x === "ROLE_PATIENT")) {
      this.showComments = false;
    }
    if (this.userRoles.some(x => x === "ROLE_HEALTH_PROFESSIONAL")) {
      this.showComments = true;
    }
  }

  ionViewDidLoad() {
    console.log(this.exam);

    for (let i = 0; i < this.exam.images.length; i++) {
      this.getExamImages(this.exam.images[i].examIdentification, this.exam.images[i].imageIdentification);
    }
  }

  getExamStatusColor(status: string) {
    let border = this.examService.getExamStatusColor(status.toLowerCase());
    return border;
  }

  getExamImages(exid: string, edid: number) {
    this.examService.getExamImage(this.currentUser.userName, this.currentUser.token, exid, edid).subscribe(
      response => {
        if (response.result == "success") {
        }
        response.documentValue = "data:image/jpg;base64," + response.documentValue;
        this.examImages.push(response);
        this.modalPhotos.push({ "url": response.documentValue });
      }
    );
  }

  openGallery(i: number) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.modalPhotos,
      initialSlide: i
    });
    modal.present();
  }

  clickShowImages() {
    if (this.showImages) {
      this.showImages = false;
    } else {
      this.showImages = true;
    }
  }
  clickShowPdf() {
    let examPdfUrl = this.examService.getExamDocumentsAsPdf(this.currentUser.userName, this.currentUser.token, this.exam.identification);
    this.appCtrl.getRootNav().push(ExamsPdf, {
      "url": examPdfUrl
    });
  }
  clickShowPax() {
    this.appCtrl.getRootNav().push(ExamsPacs);
  }
  clickShowComments() {
    let modal = this.modalCtrl.create(ExamsCommentsPage, { 'exid': this.exam.identification });
    modal.present();
  }

}
