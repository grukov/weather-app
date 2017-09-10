import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, args: string): string {

    let result: string;
    switch(args.toLowerCase()){
      case 'c':
        result = ((value - 32) * 0.5556).toFixed(2) + "°C";
        break;
      case 'f':
        result = ((value * 1.8) + 32).toFixed(2) + "°F";
      default:
        break;

    }
    return result;
  }

}
