import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-unused-variable
import {Http, Headers, RequestOptions, Response} from '@angular/http';
// tslint:disable-next-line:no-unused-variable
import { Observable } from 'rxjs/Rx';


const API = 'https://www.guardasaude.com.br/mobile/';

@Injectable()
export class LoginService {

    constructor(private http: Http) {  
    }
    
    getLoginStatus() {
        return this.http.get(API + 'authenticateUser?LDWI=ZG9jdG9y&GKSP=dGVzdGU=')
        .map(this.handleRequest);
    }

    private handleRequest(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}