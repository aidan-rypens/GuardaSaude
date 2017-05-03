import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthService } from 'auth';
import { environment } from '../environments/environment';

@Injectable()
export class ExamService {
    constructor(private http: Http) {}

    listExams(username: string, token: string, accessRole: string) {
        return this.http.get(environment.baseApi + environment.listExamsUrl + 'user=' + username + '&token=' + token + '&accessRole' + accessRole)
        .map(this.handleRequest)
        .catch(this.handleError);
    }

    private handleRequest(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // Connect logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}