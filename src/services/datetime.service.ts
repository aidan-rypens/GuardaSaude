import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class DateTimeService {
    getCurrentDateTime() {

        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let hour = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
    }
}