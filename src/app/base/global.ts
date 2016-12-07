import { Injectable } from '@angular/core';
import { Cookie } from './helper';

/**
 * 全局变量
 * 
 * @export
 * @class Global
 */
@Injectable()
export class Global{
    private baseUrl:string;
    public hasLogin:boolean;
    public url:any;
    public tokenKey:string;
    public tokenValue:string;

    constructor(){
        this.hasLogin = false;//是否登录
        this.tokenKey = 'express-token-key'//表头 key;
        this.tokenValue = window.sessionStorage.getItem(this.tokenKey) ||　Cookie.get(this.tokenKey);
        this.baseUrl = '//127.0.0.1';
        this.url = {
            user:{
                login: this.baseUrl + '/user/login.htm',
                loginOut: this.baseUrl + '/user/loginOut.htm',
            }
        }
    }
}