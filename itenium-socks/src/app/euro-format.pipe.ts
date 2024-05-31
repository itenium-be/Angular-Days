import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroFormat',
  standalone: true
})
export class EuroFormatPipe implements PipeTransform {

  transform(value: number): string {
    return new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(value);
  }

}

