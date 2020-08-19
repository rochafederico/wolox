import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import Tech from '../model/tech.tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechsService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Tech[]>{
    return this.http.get<Tech[]>(`${environment.urlApi}techs`);
  }
}
