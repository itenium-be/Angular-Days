import { Pipe, PipeTransform } from '@angular/core';
import {Review} from "../socks/sock.model";

@Pipe({
  standalone: true,
  name: 'review'
})
export class ReviewPipe implements PipeTransform {

  transform(review: Review): unknown {
    const now = new Date();
    const addedDate = new Date(review.added);
    const diffInMilliseconds = now.getTime() - addedDate.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60  * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    if(diffInDays > 0){
      return `Added ${diffInDays} days ago`;
    } else if(diffInHours > 0){
      return `Added ${diffInHours} hours ago`;
    } else if(diffInMinutes > 0) {
      return `Added ${diffInMinutes} minutes ago`;
    } else {
      return `Added on ${addedDate.toDateString()}`
    }
  }

}
