import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Global } from '../base/global';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    _user:any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private loginService: LoginService,
        private _global:Global
    ){
        
    }

    ngOnInit(){
        this._user = {};
    }

    public doLogin():void{
        this.loginService.login(this._user)
            .subscribe((res:any) => {
                if(res && res.code == 200){
                    this._global.hasLogin = true;
                    this.router.navigateByUrl("home");
                }
            })
    }

    public doLogout():void{
        this.loginService.logout()
            .subscribe((res:any) => {
                if(res && res.code == 200){
                    this._global.hasLogin = false;
                    this.router.navigateByUrl("login");
                }
            })
    }

}

interface User{
    user:string,
    password:string
}