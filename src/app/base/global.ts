import { Injectable } from '@angular/core';

/**
 * 全局变量
 * 
 * @export
 * @class Global
 */
@Injectable()
export class Global{
    public hasLogin:boolean;
    private baseUrl:string;
    public url:any;

    constructor(){
        this.hasLogin = false;
        this.baseUrl = '//127.0.0.1';
        this.url = {
            user:{
                login: this.baseUrl + '/user/login.htm',
                loginOut: this.baseUrl + '/user/loginOut.htm',
            }
        }
    }
}