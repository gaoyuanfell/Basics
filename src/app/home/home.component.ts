import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Global } from '../base/global';
import { Cookie } from '../base/helper';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _loginService:LoginService,
        private _global:Global
    ){

    }
    ngOnInit(){

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