import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { ExamsDoctorPage } from '../pages/exams-doctor/exams-doctor';
import { ExamsPatientPage } from '../pages/exams-patient/exams-patient';
import { ExamsPage } from '../pages/exams/exams';

// Services
import { AuthService } from '../services/auth.service';
import { ExamService } from '../services/exam.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    ExamsDoctorPage,
    ExamsPatientPage,
    ExamsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    ExamsDoctorPage,
    ExamsPatientPage,
    ExamsPage
  ],
  providers: [
    AuthService,
    ExamService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
