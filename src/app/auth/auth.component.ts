import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    inLoginMode = true
    isLoading = false
    error: string = null

    constructor(private authService: AuthService){}

    onSwitchMode(){
        this.inLoginMode = !this.inLoginMode
    }

    onSubmit(form: NgForm){
        // console.log(form.value)
        if(!form.valid){return}
        const email = form.value.email
        const password = form.value.password
    
        this.isLoading = !this.isLoading
        if(this.inLoginMode){

        }else {
            this.authService.signUp(email, password).subscribe(
                respData => {
                    console.log(respData)
                    this.isLoading = !this.isLoading
                },
                error => {
                    console.log(error)
                    this.error = 'An error occurred!'
                    this.isLoading = !this.isLoading
                }
            )
        }

        form.reset()
    }
}