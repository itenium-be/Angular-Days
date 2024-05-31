import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: number | Date | string): string {
    if (!value) return 'N/A';

    const time = new Date(value).getTime();
    const now = new Date().getTime();
    const difference = Math.floor((now - time) / 1000);

    if (difference < 30) {
      return 'Just now';
    } else if (difference < 60) {
      return 'A few seconds ago';
    } else if (difference < 3600) {
      const minutes = Math.floor(difference / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (difference < 86400) {
      const hours = Math.floor(difference / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(difference / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }

}
