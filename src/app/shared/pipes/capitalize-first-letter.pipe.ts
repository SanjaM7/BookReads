import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    if (value.length) {
      const returnValue = value[0].toUpperCase() + value.slice(1);
      return returnValue;
    }

    return null;
  }
}

