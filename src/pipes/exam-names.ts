import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExamNames pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'ExamNames',
})
export class ExamNames implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    let formattedNames: string[] = new Array();

    value.split(' ').forEach(name => {
      formattedNames.push(name.substring(0, 1).toUpperCase() + name.substring(1, name.length).toLowerCase());
    })

    return formattedNames.join(" ");
  }
}
