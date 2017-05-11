import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { environment } from "../environments/environment";
import { saudeConfig } from "../configurations/saudeConfig";

import { ClientConfig } from "../domain/clientconfig";

@Injectable()
export class ClientConfigService {

    private clientConfig: ClientConfig;

    constructor(private http: Http) {
        this.clientConfig = {
            selectedLanguage: saudeConfig.default_setting_language,
            blnExams: saudeConfig.default_setting_new_exam,
            blnImages: saudeConfig.default_setting_new_image,
            blnDocuments: saudeConfig.default_setting_new_document
        };
    }


    setClientConfig(selectedLanguage: string, blnExams: boolean, blnImages: boolean, blnDocuments: boolean) {
        this.clientConfig.selectedLanguage = selectedLanguage;
        this.clientConfig.blnExams = blnExams;
        this.clientConfig.blnImages = blnImages;
        this.clientConfig.blnDocuments = blnDocuments;

        localStorage.setItem('clientConfig', JSON.stringify(this.clientConfig));
    }

    getClientConfig() {
        let storedConfig = (JSON.parse(localStorage.getItem('clientConfig')));
        if (!(storedConfig == null)) {
            this.clientConfig = storedConfig
        }

        return this.clientConfig;
    }
}