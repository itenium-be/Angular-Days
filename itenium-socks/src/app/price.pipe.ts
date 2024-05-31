import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      return `€${value.toFixed(2)}`;
    } else {
      return '€0.00';
    }
  }

}
