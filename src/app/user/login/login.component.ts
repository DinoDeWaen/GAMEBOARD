import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
