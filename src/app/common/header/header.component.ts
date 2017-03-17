import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../../user/services/user.service";
import { User } from "../../user/models/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers : [UserService]
})
export class HeaderComponent implements OnInit {

 @Input() public user:User;

  constructor(private userService:UserService,private router:Router) {
              this.userService.getUser()
            .subscribe(data => {
                console.log("constructor");
                console.log(data);
                this.user = data;
                console.log(this.user);
            });
   }

  ngOnInit() {
  }

  logout() {
        this.userService.logout()
            .subscribe(() => {
                this.router.navigateByUrl("/");
            });
    }

}
