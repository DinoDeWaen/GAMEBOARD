import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
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
      getUser():Observable  <UserImp>{
        return new Observable(observable => {
            this.auth.subscribe(authData => {
                let user;
                console.log(authData);
                if (authData) {
                    user = new UserImp(authData);
                }
                observable.next(user);
            });
        });
    }

    login(email:string, password:string):Observable <UserImp>{
        var creds: any = {email: email, password: password};
        var res: Promise<UserImp> = new Promise((resolve, reject) => {
        this.auth.login(creds).then(
            result => {
                resolve(new UserImp(result));
             })
        });
        return Observable.fromPromise(res);
    }

    register(email: string, password: string): Observable<UserImp>{
        var creds: any = { email: email, password: password };
        var res: Promise<UserImp> = new Promise((resolve, reject) => {
        this.af.auth.createUser(creds).then(
            result => {
             resolve(new UserImp(result));
            })
        });
        return Observable.fromPromise(res);
    }

    public logout() :Observable <UserImp>{
        return new Observable(observable => {
            this.auth.logout()
            observable.next();
            });
    }
}
