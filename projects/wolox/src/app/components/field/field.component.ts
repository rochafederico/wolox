import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wlx-field',
  templateUrl: './field.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldComponent {
  @Input() label: string;
}
