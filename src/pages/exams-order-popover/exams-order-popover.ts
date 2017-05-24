import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { OrderPopoverService } from '../../services/orderpopover.service';

/**
 * Generated class for the ExamsOrderPopover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  templateUrl: 'exams-order-popover.html',
})
export class ExamsOrderPopover {

  constructor(public viewCtrl: ViewController, private orderPopoverService: OrderPopoverService) {
  }

  close() {
    //this.viewCtrl.dismiss(this.orderById);
  }

}
