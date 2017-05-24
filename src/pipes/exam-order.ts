import { Pipe, PipeTransform } from '@angular/core';
import { OrderPopoverService } from '../services/orderpopover.service';

/**
 * Generated class for the ExamOrder pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'ExamOrder',
})
export class ExamOrder implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  constructor(public orderPopoverService: OrderPopoverService) {
  }

  transform(data: any[]) {

    /*
    if (this.orderPopoverService.orderById === 0) {
      // a-z else z-a
      if (this.orderPopoverService.iconThumbs[this.orderPopoverService.orderById].endsWith("sort-bottom")) {
      } else {
      }
    }
    */

    return data;
  }
}