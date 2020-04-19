import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = "kid_S1mIOIlIX";
const appSecret = "2824c8a8370146019a5b1e7a8aeab874"
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
    private currentAuthToken : string;
    private admins = ['maxpane'];

    constructor(private http: HttpClient){}

    login(model:LoginModel) {
        return this.http.post(loginUrl,
        JSON.stringify(model))
    }

    register(model: RegisterModel) {
        return this.http.post(registerUrl,
        JSON.stringify(model))
    }

    isAuthenticated() : boolean {
        return localStorage.getItem('username') !== null;
      }

    logout() {
        return this.http.post(logoutUrl, {})
    }

    checkIfLoggedIn() {
        return this.currentAuthToken === localStorage.getItem('authtoken')
    }

    get authtoken() {
        return this.currentAuthToken
    }

    set authtoken(value: string) {
        this.currentAuthToken = value; 
    }

    isAdmin(){
        let currentUser = localStorage.getItem('username');
        for(let i=0; i<this.admins.length; i++){
            if(currentUser === this.admins[i]){
                return true;
            }
        }

        return false;
    }
}
