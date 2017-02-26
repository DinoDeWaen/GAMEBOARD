import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { UserImp } from '../models/userimpl'

@Injectable()
export class UserService {
  
  user = {};
  public auth;

  constructor(public af: AngularFire) { 
    this.auth = this.af.auth;
    this.auth.subscribe(user => {
        if(user) {
            // user logged in
            this.user = user;
        }
        else {
            // user not logged in
            this.user = {};
        }
        });
  }

    signUp(email: string, password: string) {
        var creds: any = { email: email, password: password };
        this.af.auth.createUser(creds);
    }
    login(email: string, password: string): Promise<boolean> {
        var creds: any = {email: email, password: password};
        var res: Promise<boolean> = new Promise((resolve, reject) => {
        this.auth.login(creds).then(result => {
            resolve(result);
        })
        });
        return res;
    }

    public logout() {
      return this.auth.signOut();
    }
}
