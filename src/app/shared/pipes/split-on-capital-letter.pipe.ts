import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitOnCapitalLetter'
})
export class SplitOnCapitalLetterPipe implements PipeTransform {

  transform(value: string, separator = ' '): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    const values = value.split(/(?=[A-Z])/);
    const joined = values.join(separator);
    return joined;
  }
}
