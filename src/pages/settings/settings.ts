import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClientConfig } from '../../domain/clientconfig';

import { ClientConfigService } from '../../services/clientconfig.service';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private language: string;
  private blnExams: boolean;
  private blnImages: boolean;
  private blnDocuments: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clientConfigService: ClientConfigService) {
    let clientConfig = clientConfigService.getClientConfig();
    this.language = clientConfig.selectedLanguage;
    this.blnExams = clientConfig.blnExams;
    this.blnImages = clientConfig.blnImages;
    this.blnDocuments = clientConfig.blnDocuments;
  }

  saveSettings() {
    this.clientConfigService.setClientConfig(this.language, this.blnExams, this.blnImages, this.blnDocuments);
  }

}
