import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  // rules for date-fns
  // 0 ... 30 secs	-> less than a minute
  // 30 secs ... 1 min 30 secs ->	1 minute
  // 1 min 30 secs ... 44 mins 30 secs	-> [2..44] minutes
  // 44 mins ... 30 secs ... 89 mins 30 secs	-> about 1 hour
  // 89 mins 30 secs ... 23 hrs 59 mins 30 secs	about -> [2..24] hours
  // 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs	-> 1 day
  // 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs	-> [2..30] days
  // 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs	-> about 1 month
  // 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs	-> about 2 months
  // 59 days 23 hrs 59 mins 30 secs ... 1 yr	-> [2..12] months
  // 1 yr ... 1 yr 3 months	-> about 1 year
  // 1 yr 3 months ... 1 yr 9 month s	-> over 1 year
  // 1 yr 9 months ... 2 yrs	-> almost 2 years
  // N yrs ... N yrs 3 months	-> about N years
  // N yrs 3 months ... N yrs 9 months	-> over N years
  // N yrs 9 months ... N+1 yrs	-> almost N+1 years

  transform(value: Date): string {
    if (!value) {
      return '';
    }

    const now = new Date();
    const date = new Date(value);

    return formatDistance(date, now, { addSuffix: true });
  }
}
