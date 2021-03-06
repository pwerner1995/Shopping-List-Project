import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData} from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    inLoginMode = true
    isLoading = false
    error: string = null

    constructor(private authService: AuthService, private router: Router){}

    onSwitchMode(){
        this.inLoginMode = !this.inLoginMode
    }

    onSubmit(form: NgForm){
        // console.log(form.value)
        if(!form.valid){return}
        const email = form.value.email
        const password = form.value.password
        let authObs: Observable<AuthResponseData>

        this.isLoading = !this.isLoading
        if(this.inLoginMode){
            authObs = this.authService.login(email, password)
        }else {
            authObs = this.authService.signUp(email, password)
        }

        authObs.subscribe(
            respData => {
                console.log(respData)
                this.isLoading = false
                this.router.navigate(['/recipes'])
            },
            errorMessage => {
                console.log(errorMessage)
                
                this.error = errorMessage
                this.isLoading = false
            }  
        )

        form.reset()
    }

    onHandleError(){
        this.error = null
    }
}