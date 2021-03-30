import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsusarios(){
    let params = new HttpParams().append('page','2');

    params = params.append('nombre','juan mendez');

    /* const headers = new HttpHeaders({
      'x-token': '52345sadfasdfasd'
    }) */

    return this.http.get('https://reqres.in32/api/user',{ params })
                    .pipe(
                      map( (resp: any) => resp['data'] ),
                      catchError( this.manejarError)
                    );

  }

  manejarError(error: HttpErrorResponse){
    console.warn(error);
    return throwError('Error emitido en manejador errores');
  }
}
