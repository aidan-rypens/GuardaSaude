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
import { ExamsOrderPopover } from '../pages/exams-order-popover/exams-order-popover';

// Services
import { AuthService } from '../services/auth.service';
import { ExamService } from '../services/exam.service';
import { ClientConfigService } from '../services/clientconfig.service';
import { OrderPopoverService } from '../services/orderpopover.service';

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
import { Ng2OrderModule } from 'ng2-order-pipe';


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
    ExamsOrderPopover,
    PdfViewerComponent,
    GalleryModal,
    ZoomableImage,
    ExamSearch,
    ExamOrder
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2OrderModule,
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
    ExamsOrderPopover,
    ExamsPdf,
    ExamsPacs,
    GalleryModal
  ],
  providers: [
    AuthService,
    ExamService,
    ClientConfigService,
    OrderPopoverService,
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
