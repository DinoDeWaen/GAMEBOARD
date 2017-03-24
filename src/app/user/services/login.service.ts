import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private authErrorStream: Observable<any>;

  private userStream: Observable<User>;
  private user: User;

  private isLoggingInStream: Observable<boolean>;
  private loggingIn: boolean;

  private isLoggedInStream = new ReplaySubject<boolean>(1);
  constructor( private authService: AuthService,
    private userService: UserService,
  ) { }

}
