import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Global } from '../base/global';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private loginService:LoginService,
        private _global:Global
    ){

    }
    ngOnInit(){

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