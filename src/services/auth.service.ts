import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {environment} from "../environments/environment";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    getTokenCurrentUser() {
        let currentUser = (localStorage.getItem('currentUser'));
        let token = (localStorage.getItem('token'));

        let userInfo = {
            "userName": currentUser,
            "token": token
        };

        return userInfo;
    }

    login(username: string, password: string) {
        localStorage.setItem('currentUser', atob(username));
        return this.http.get(environment.baseApi + environment.loginUrl + 'LDWI=' + username + '&GKSP=' + password)
            .map(this.handleRequest)
            .catch(this.handleError);
    }

    logout() {
        localStorage.removeItem('currentUser')
    }

    private handleRequest(res: Response) {        
        let body = res.json();
        if (body.success) {
            localStorage.setItem('token', (body.token));
            return true;
        } else {
            return false;
        }
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