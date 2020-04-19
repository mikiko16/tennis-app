import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

const appKey = "kid_S1mIOIlIX";
const appSecret = "2824c8a8370146019a5b1e7a8aeab874"

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    
    constructor(public authService: AuthService,
    private router: Router,
    private toastr: ToastrService){}

    intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{

    if(request.url.endsWith('login') || request.url.endsWith(appKey)){
        request = request.clone({
            setHeaders: {
            'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
            'Content-Type': 'application/json'
            }
        })
    }
    else{
        request = request.clone({
            setHeaders: {
            'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            'Content-Type': 'application/json'
            }
        })
    }
        return next.handle(request)
        .pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && request.url.endsWith('login')){
                this.successfulLogin(event.body)
            }
        },
    (err: any) => {
        if(err instanceof HttpErrorResponse){
            switch(err.status){
                case 401:
                this.toastr.error(err.error.description,"Warning !")
                break;
                case 400:
                this.toastr.error(err.error.description,"Warning !")
                break;
                case 404:
                this.toastr.error(err.error.description,"Warning !")
                break;
                case 409:
                this.toastr.error(err.error.description,"Warning !")
                break;
            }

            return throwError(err);
        }
    }))
    }

    private successfulLogin(data) {
        this.authService.authtoken = data['_kmd']['authtoken'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        localStorage.setItem('id', data['_id']);
        this.router.navigate(['/home']);
        this.toastr.success("Logged in successful")
      }
}