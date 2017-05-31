import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http } from '@angular/http';

// Pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { ExamsDoctorPage } from '../pages/exams-doctor/exams-doctor';
import { ExamsPatientPage } from '../pages/exams-patient/exams-patient';
import { ExamsPage } from '../pages/exams/exams';
import { ExamsDetail } from '../pages/exams-detail/exams-detail';
import { ExamsPdf } from '../pages/exams-pdf/exams-pdf';
import { ExamsPacs } from '../pages/exams-pacs/exams-pacs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { RegisterAdvertise } from '../pages/register-advertise/register-advertise';
import { ExamsOrderPopover } from '../pages/exams-order-popover/exams-order-popover';
import { ExamsCommentsPage } from '../pages/exams-comments/exams-comments';

// Services
import { AuthService } from '../services/auth.service';
import { ExamService } from '../services/exam.service';
import { ClientConfigService } from '../services/clientconfig.service';
import { OrderPopoverService } from '../services/orderpopover.service';
import { DateTimeService } from '../services/datetime.service';

// External Components
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { Dialogs } from '@ionic-native/dialogs';
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// Pipes
import { ExamSearch } from '../pipes/exam-search';
import { ExamOrder } from '../pipes/exam-order';
import { ExamDate } from '../pipes/exam-date';
import { ExamNames } from '../pipes/exam-names';
import { ExamServicename } from '../pipes/exam-servicename';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "../assets/translations/", ".json");
}


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ExamsDoctorPage,
    ExamsPatientPage,
    ExamsPage,
    ExamsDetail,
    LandingPage,
    ExamsPdf,
    ExamsPacs,
    SettingsPage,
    AccountPage,
    RegisterAdvertise,
    ExamsOrderPopover,
    ExamsCommentsPage,
    PdfViewerComponent,
    GalleryModal,
    ZoomableImage,
    ExamSearch,
    ExamOrder,
    ExamDate,
    ExamNames,
    ExamServicename
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp, { tabsPlacement: 'top' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ExamsDoctorPage,
    ExamsPatientPage,
    ExamsPage,
    ExamsDetail,
    LandingPage,
    SettingsPage,
    AccountPage,
    RegisterAdvertise,
    ExamsOrderPopover,
    ExamsCommentsPage,
    ExamsPdf,
    ExamsPacs,
    GalleryModal
  ],
  providers: [
    AuthService,
    ExamService,
    ClientConfigService,
    OrderPopoverService,
    DateTimeService,
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
