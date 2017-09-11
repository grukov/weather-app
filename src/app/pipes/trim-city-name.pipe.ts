import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCityName'
})
export class TrimCityNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substring('Yahoo! Weather for '.length);
  }

}
