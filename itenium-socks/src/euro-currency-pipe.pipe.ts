import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'euroCurrencyPipe',
  standalone: true
})
export class EuroCurrencyPipePipe implements PipeTransform {

  transform(value: string | null): string | null {
    return value ? `€ ${value}` : null;
  }

}
