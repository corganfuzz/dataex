import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExternalService {

  // private url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('reaquest intercepted');

  // clone request

  const authReq = req.clone(
    {
      headers: req.headers.set('headerName', 'headerValue')
    }
  );

  console.log('Sending request with new header now ...');


    // send the newly created request

  return next.handle(authReq).pipe(
        catchError((error, caught) => {
          console.log('error ocurred');
          console.log(error);

          return throwError(error);
        }) as any
        );

  }

}
