import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http'
import { Global } from '../base/global';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService{
    public userUrl:any;
    constructor(private _global:Global, private  _http:Http){
        this.userUrl = _global.url.user;
    }
    public hasLogin:boolean = false;

    private headers = new Headers({'Content-Type': 'application/json'});

    public login(user:any):Observable<Response>{
        return this._http.post(this.userUrl.login,user)
    }

    public logout():Observable<Response>{
        return this._http.get(this.userUrl.loginOut)
    }
}
