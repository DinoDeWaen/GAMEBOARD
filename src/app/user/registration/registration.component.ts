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

  constructor(private userService:UserService, private router:Router, public fb: FormBuilder) {
  
}

  ngOnInit() {
  }
  register(email:string, password:string) {
      console.log(email + " " +password);
      this.userService.signUp(email, password);
    }
}
