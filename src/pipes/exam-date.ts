import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExamDate pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'ExamDate',
})
export class ExamDate implements PipeTransform {
  transform(value: string) {
    value = value.split(' ')[0];
    return value;
  }
}
