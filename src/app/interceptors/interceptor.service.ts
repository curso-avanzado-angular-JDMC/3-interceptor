import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'x-token': '52345sadfasdfasd'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
        catchError( this.manejarError )
      )
  }

  manejarError(error: HttpErrorResponse){
    console.warn(error);
    return throwError('Error emitido en manejador errores');
  }
}
