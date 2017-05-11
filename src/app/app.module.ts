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
import { LandingPage } from '../pages/landing/landing';
import { ExamsDoctorPage } from '../pages/exams-doctor/exams-doctor';
import { ExamsPatientPage } from '../pages/exams-patient/exams-patient';
import { ExamsPage } from '../pages/exams/exams';
import { ExamsDetail } from '../pages/exams-detail/exams-detail';
import { ExamsPdf } from '../pages/exams-pdf/exams-pdf';
import { SettingsPage } from '../pages/settings/settings';

// Services
import { AuthService } from '../services/auth.service';
import { ExamService } from '../services/exam.service';
import { ClientConfigService } from '../services/clientconfig.service';

// External Components
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { Dialogs } from '@ionic-native/dialogs';
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    ExamsDoctorPage,
    ExamsPatientPage,
    ExamsPage,
    ExamsDetail,
    LandingPage,
    ExamsPdf,
    SettingsPage,
    PdfViewerComponent,
    GalleryModal,
    ZoomableImage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: 'top' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    ExamsDoctorPage,
    ExamsPatientPage,
    ExamsPage,
    ExamsDetail,
    LandingPage,
    SettingsPage,
    ExamsPdf,
    GalleryModal
  ],
  providers: [
    AuthService,
    ExamService,
    ClientConfigService,
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
