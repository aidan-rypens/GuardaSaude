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

  transform(value: any[], expression?: any, reverse?: boolean): any {
    if (!value) {
      return value;
    }
    let array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) {
        return a > b ? 1 : -1;
      }

      return a[expression] > b[expression] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }
    return array;
  }
}