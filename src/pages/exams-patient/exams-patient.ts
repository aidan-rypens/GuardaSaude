import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Exam } from '../../domain/exam';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initExams();
  }

  private exams: Exam[];
  private filteredExams: Exam[];
  private searchQuery: string = '';

  initExams() {
    this.exams = [
    {
      examId: "GKS0004",
      examStatus: "Em analise",
      clinicName: "UZA",
      patientName: "John Smith Paul Owkenfield",
      examDate: new Date('')
    },
    {
      examId: "GKS0005",
      examStatus: "Em analise",
      clinicName: "UZA",
      patientName: "Fred Huts",
      examDate: new Date('')
    },
    {
      examId: "GKS0006",
      examStatus: "Em analise",
      clinicName: "UZA",
      patientName: "Annelies",
      examDate: new Date('')
    },
    {
      examId: "GKS0007",
      examStatus: "Em analise",
      clinicName: "UZA",
      patientName: "Bert Londerzeel",
      examDate: new Date('')
    }
  ];
  }

  searchBarEvent(ev: any) {
    this.searchQuery = ev.target.value;  
    this.filterExams();  
  }
  filterExams() {
    this.filteredExams = this.exams.filter(x =>
      x.patientName == this.searchQuery
    );

    if (this.filteredExams.length>0) {
      this.exams = this.filteredExams;
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ExamsPatient');
  }

}
