import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderPopoverService {


    public sortBottom: string = "../../assets/images/icons/sort-bottom.png"
    public sortTop: string = "../../assets/images/icons/sort-top.png"

    public iconThumbs: String[];
    public orderById: number = -1;
    public orderName: string = "";
    public orderReverse: boolean = false;

    constructor() {
        this.iconThumbs = [];
        this.iconThumbs[0] = this.sortTop;
        this.iconThumbs[1] = this.sortTop;
        this.iconThumbs[2] = this.sortTop;
        this.iconThumbs[3] = this.sortTop;
    }

    clickOrderBy(orderById: number, orderName: string) {
        this.orderName = orderName;
        this.orderById = orderById;

        if (this.iconThumbs[orderById] == this.sortTop) {
            this.iconThumbs[orderById] = this.sortBottom;
            this.orderReverse = true;

        } else {
            this.iconThumbs[orderById] = this.sortTop;
            this.orderReverse = false;
        }
    }
}