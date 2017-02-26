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
    
    doLogin(event) {
        // Show the value of the form
        let formData = this.loginForm.value;
        // { email: 'blah@blah.net', password: 'imnottelling1' }

        // Or, grab the value of one control:
        let email = this.loginForm.controls["email"].value;
        let password = this.loginForm.controls["password"].value;
        console.log(email);
        console.log(password)
        this.userService.login(email, password).then((res) => {
          console.log(res);
          if (res)
            this.router.navigateByUrl("/");
        });


    }
}
