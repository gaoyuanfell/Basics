import { ease } from '../common/animation/animation';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LoginService } from './login.service';
// import { Global } from '../base/global';
import { Cookie } from '../base/helper';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations:[ease]
})
export class LoginComponent implements OnInit{
    _user:any;
    remember:boolean = false;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        @Inject('loginService') private _loginService,
        @Inject('global') private _global
    ){

    }

    ok(e,a){
        console.info(e);
        console.info(a);
    }

    no(e,a){
        console.info(e);
        console.info(a);
    }

    ngOnInit(){
        this._user = {};
    }

    public doLogin():void{
        this._loginService.login(this._user)
            .subscribe((res:any) => {
                console.info(res);
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
                    window.sessionStorage.removeItem(this._global.tokenKey);
                    Cookie.remove(this._global.tokenKey);
                    this._router.navigateByUrl("login");
                }
            })
    }
}
