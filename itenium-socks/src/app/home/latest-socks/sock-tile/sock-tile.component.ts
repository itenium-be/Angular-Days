import {Component, Input} from '@angular/core';
import {Sock} from '@models/sock.model';
import {EuroPipe} from "@shared/euro.pipe";

@Component({
  selector: 'sock-tile',
  standalone: true,
  imports: [
    EuroPipe
  ],
  templateUrl: './sock-tile.component.html',
  styleUrl: './sock-tile.component.scss'
})
export class SockTileComponent {
  @Input() sock!: Sock;
}
