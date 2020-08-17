import { Component, Input } from '@angular/core';

@Component({
  selector: 'wlx-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  @Input() id: string;
}
