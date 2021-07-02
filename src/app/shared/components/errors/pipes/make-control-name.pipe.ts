import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'makeControlName'
})
export class MakeControlNamePipe implements PipeTransform {

  transform(value: string | null | undefined, separator = ' '): string {
    if (value === null || value === undefined || value === '') {
        throw new Error('Value must not be null or undefined or empty');
    }

    const values = value.split(/(?=[A-Z])/);
    const joined = values.join(separator);
    let controlName = joined.toLowerCase();
    controlName = controlName[0].toUpperCase() + controlName.slice(1);
    return controlName;
  }
}
