import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  template: `
            <div role="dialog" tabindex="-1" aria-labelledby="header43" class="slds-modal slds-fade-in-open">
            <div class="slds-modal__container">
              <div class="slds-modal__header">
                <button class="slds-button slds-modal__close slds-button--icon-inverse" title="Close">
                  <svg class="slds-button__icon slds-button__icon--large" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                  </svg>
                  <span class="slds-assistive-text">Close</span>
                </button>
                <h2 id="header43" class="slds-text-heading--medium">Sign up</h2>
              </div>
              <form [formGroup]="loginForm" (ngSubmit)="register($event)" class="slds-modal__content slds-p-around--medium">
                <ngl-form-element label="email" [error]="hasError ? error : null" class="slds-m-top--small">
                <input nglFormControl formControlName="email" type="email" placeholder="Your email" [required]="required">
              </ngl-form-element>
              <ngl-form-element label="password" [error]="hasError ? error : null" class="slds-m-top--small">
                <input nglFormControl formControlName="password" type="password" placeholder="Your password" [required]="required">
              </ngl-form-element>
              <br/>
              <div class="slds-modal__footer">
                <button type="button" nglButton="neutral" (click)="cancel()">Cancel</button>
                <button type="submit" nglButton="brand">Log in</button>
              </div>
              </form>
            </div>
          </div>
          <div class="slds-backdrop slds-backdrop--open"></div>
  `,
  providers : [UserService]
})
export class RegistrationComponent implements OnInit {

    public error:string;
    public loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  constructor(private userService:UserService, private router:Router, public fb: FormBuilder) {
  
}

  ngOnInit() {
  }
  register(eevent) {
            // Show the value of the form
        let formData = this.loginForm.value;
        // { email: 'blah@blah.net', password: 'imnottelling1' }

        // Or, grab the value of one control:
        let email = this.loginForm.controls["email"].value;
        let password = this.loginForm.controls["password"].value;

        this.userService.register(email, password)
            .subscribe(user => {
                console.log("goto root")
                this.router.navigateByUrl("/");
            }, error => {
                console.log("login")
                this.error = error;
            },()=>{console.log("finished")});
    }

    cancel(){
      console.log("cancel");
      this.router.navigateByUrl("/");
    }
}
