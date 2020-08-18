import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class ResponseLogin {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _token: string;
  get token(): string{
    return this._token;
  }
  constructor(private http: HttpClient) {
    let result;
    if (localStorage.getItem('tokenWolox')){
      result = localStorage.getItem('tokenWolox');
    } else {
      result = sessionStorage.getItem('tokenWolox');
    }

    this._token = result;
  }
  login(email: string, password: string, remember = false): Observable<boolean>{
    const body = {email, password};
    return this.http
      .post(
        `${environment.urlApi}login`,
        body,
        {responseType: 'text'})
      .pipe(
        map((data) => {
          const result = JSON.parse(data.replace('token:', '"token":')) as ResponseLogin;

          if (remember){
            localStorage.setItem('tokenWolox', result.token);
          } else {
            sessionStorage.setItem('tokenWolox', result.token);
          }

          this._token = result?.token;
          return !!result?.token;
        })
      );
  }
}
