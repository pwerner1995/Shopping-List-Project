import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface AuthResponseData{
    kind: string
    idToken: string
    email: string
    refreshString: string
    expiresIn: string
    localId: string
}

@Injectable({providedIn: 'root'})

export class AuthService{

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAURewZkKH0qKxSgGtOQeaCtjzgIVBaa2M',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
    }
}