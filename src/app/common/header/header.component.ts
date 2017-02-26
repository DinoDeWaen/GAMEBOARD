import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user/services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  logout() {
        this.userService.logout()
            .subscribe(() => {
                this.router.navigateByUrl("/");
            });
    }

}