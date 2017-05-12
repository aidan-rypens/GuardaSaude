import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { environment } from "../environments/environment";
import { saudeConfig } from "../configurations/saudeConfig";

import { ClientConfig } from "../domain/clientconfig";
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ClientConfigService {

    private clientConfig: ClientConfig;
    private translate: TranslateService;

    constructor(private http: Http, translate: TranslateService) {
        this.clientConfig = {
            selectedLanguage: saudeConfig.default_setting_language,
            blnExams: saudeConfig.default_setting_new_exam,
            blnImages: saudeConfig.default_setting_new_image,
            blnDocuments: saudeConfig.default_setting_new_document
        };

        let storedConfig = (JSON.parse(localStorage.getItem('clientConfig')));
        if (!(storedConfig == null)) {
            this.clientConfig = storedConfig
        }

        this.translate = translate;
    }

    setLanguage() {
        this.translate.addLangs(["en", "pt"]);
        this.translate.setDefaultLang('en');

        if (this.clientConfig.selectedLanguage.toLowerCase().startsWith("e")) {
            console.log("Engels");
            this.translate.use('en');
        }
        if (this.clientConfig.selectedLanguage.toLowerCase().startsWith("p")) {
            console.log("Portugees");
            this.translate.use('pt');
        }
    }

    setClientConfig(selectedLanguage: string, blnExams: boolean, blnImages: boolean, blnDocuments: boolean) {
        if (!(selectedLanguage == this.clientConfig.selectedLanguage)) {
            this.clientConfig.selectedLanguage = selectedLanguage;
            this.setLanguage();
        }
        this.clientConfig.blnExams = blnExams;
        this.clientConfig.blnImages = blnImages;
        this.clientConfig.blnDocuments = blnDocuments;

        localStorage.setItem('clientConfig', JSON.stringify(this.clientConfig));
    }

    getClientConfig() {
        return this.clientConfig;
    }
}