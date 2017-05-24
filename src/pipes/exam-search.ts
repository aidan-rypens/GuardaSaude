import { Injectable, Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExamSearch pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'ExamSearch',
  pure: true
})
@Injectable()
export class ExamSearch implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(data: any[], searchQuery: string) {
    if (searchQuery) {
      searchQuery = searchQuery.toLowerCase();
      return data.filter(exam => {
        if (exam.patient.toLowerCase().indexOf(searchQuery) > -1) {
          return exam;
        }
      })
    } else {
      return data;
    }
  }
}
