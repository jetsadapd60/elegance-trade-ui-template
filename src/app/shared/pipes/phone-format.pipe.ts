import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length === 10) {
      const formattedPhone = `${value.substr(0, 3)}-${value.substr(3, 3)}-${value.substr(6, 4)}`;
      return formattedPhone;
    }
    return value;
  }
}
