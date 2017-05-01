import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { ExamsPage } from '../exams/exams';
import { ExamsDoctorPage } from '../exams-doctor/exams-doctor';
import { ExamsPatientPage } from '../exams-patient/exams-patient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  about = AboutPage;
  login = LoginPage;
  exams = ExamsPage;
  examsDoctor = ExamsDoctorPage;
  examsPatient = ExamsPatientPage;

  constructor(public navCtrl: NavController) {
  }
}