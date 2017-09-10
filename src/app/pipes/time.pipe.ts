import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, format?: number): any {
    var parts = value.split(':');
    var hours = parts[0];
    var minutes = parts[1];
    if (minutes[1] == ' '){
      minutes = '0' + minutes;
    }

    if(format == 24){
      if(hours.length == 1){
        hours = "0" + hours;
      }

      if(value.indexOf('am') > -1 || value.indexOf('pm') > -1){
        var amIndex = minutes.indexOf('am');
        var pmIndex = minutes.indexOf('pm');
        var index = amIndex > -1 ? amIndex : pmIndex;
        
        if(pmIndex > -1){
          hours = Number(hours) + 12;
        }
        minutes = minutes.substring(0, index);
      }
    }

    return hours + ":" + minutes;
  }
}

