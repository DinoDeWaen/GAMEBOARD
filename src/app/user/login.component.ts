import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
            <div role="dialog" tabindex="-1" aria-labelledby="header43" class="slds-modal slds-fade-in-open app-login">
                <div  class="slds-modal__container center-middle container-fluid">
                    <form id="login-form" [formGroup]="loginForm" (ngSubmit)="login($event)" class="slds-modal__content slds-p-around--medium ">
                        <ngl-form-element [error]="hasError ? error : null"  class="slds-m-top--small ">
                            <input nglFormControl formControlName="email" type="email" placeholder="Your email" [required]="required" id="input-username" class="transparent-box input-border">
                        </ngl-form-element>
                        <ngl-form-element [error]="hasError ? error : null" class="slds-m-top--small ">
                            <input nglFormControl formControlName="password" type="password" placeholder="Your password" [required]="required" class="transparent-box input-border">
                        </ngl-form-element>
                        <br/>
                        <div>
                            <button type="submit" nglButton="brand" class="transparent-box button center-middle">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="slds-backdrop slds-backdrop--open"></div>
  `,
  styleUrls: ['login.style.css'],
  providers : [UserService]
})

export class LoginComponent implements OnInit {
    public error:string;
    public loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    constructor(private userService:UserService, private router:Router, public fb: FormBuilder) {

    }

    ngOnInit() {
    }

    login(event) {
        console.log("login")
        let email = this.loginForm.controls["email"].value;
        let password = this.loginForm.controls["password"].value;
        this.userService.login(email, password)
            .subscribe(user => {
                console.log("goto root")
                this.router.navigateByUrl("/");
            }, error => {
                console.log("login")
                this.error = error;
            },()=>{console.log("finished")});
    }

    cancel(){
      this.router.navigateByUrl("/");
    }
}
