import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import {  } from '@angular/forms';
import { LoginService } from './login.service';
import { Global } from '../base/global';
import { Cookie } from '../base/helper';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    _user:any;
    remember:boolean; 

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _loginService: LoginService,
        private _global:Global
    ){
        
    }

    ngOnInit(){
        this._user = {};
        this.remember = true;
    }

    public doLogin():void{
        this._loginService.login(this._user)
            .subscribe((res:any) => {
                if(res && res.code == 200){
                    this._global.hasLogin = true;
                    this._global.tokenValue = res.token || Cookie.get(this._global.tokenKey);
                    window.sessionStorage.setItem(this._global.tokenKey,res.token);
                    this._router.navigateByUrl("home");
                }
            })
    }

    public doLogout():void{
        this._loginService.logout()
            .subscribe((res:any) => {
                if(res && res.code == 200){
                    this._global.hasLogin = false;
                    console.info(this._global.tokenKey);
                    window.sessionStorage.removeItem(this._global.tokenKey);
                    Cookie.remove(this._global.tokenKey);
                    this._router.navigateByUrl("login");
                }
            })
    }

}