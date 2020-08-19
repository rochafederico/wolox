import { Component } from '@angular/core';
import { TechsService } from '../../services/techs.service';
import Tech from '../../model/tech.tech.model';

@Component({
  selector: 'wlx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  search: string;
  techs: Tech[];
  filteredTechs: Tech[];
  loading = true;
  constructor(private techsSrv: TechsService){
    this.techsSrv.getAll().subscribe(data => {
      this.techs = data;
      this.filteredTechs = data;
      this.loading = false;
    });
  }
  filterTechs(): void {
    debugger
    this.filteredTechs = this.techs
    .filter(x => x.tech.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
  }
}
