import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExamServicename pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'ExamServicename',
})
export class ExamServicename implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (value.length > 2) {
      value = value.substring(0, 1).toUpperCase() + value.substring(1, value.length).toLowerCase();
      return value;
    } else {
      return value;
    }
  }
}
