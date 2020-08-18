import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wlx-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  items = [
    { icon: 'Ic_Hour.svg', label: 'Flexibilidad horaria' },
    { icon: 'Ic_HomeOffice.svg', label: 'Home office' },
    { icon: 'Ic_Workshops.svg', label: 'Capacitaciones y workshops' },
    { icon: 'Ic_DrinkSnacks.svg', label: 'Snacks, frutas y bebidas gratis' },
    { icon: 'Ic_laptop.svg', label: 'Semana remota' },
    { icon: 'Ic_brain.svg', label: 'Trabajar con últimas tecnologías' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
