import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
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
