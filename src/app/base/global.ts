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
    public hasLogin:boolean = false;//是否登录
    public url:any;
    public tokenKey:string;
    public tokenValue:string;

    constructor(){
        this.tokenKey = 'express-token-key'//表头 key;
        this.tokenValue = window.sessionStorage.getItem(this.tokenKey) ||　Cookie.get(this.tokenKey);
        if(this.tokenValue){
            this.hasLogin = true;
        }

        //域名
        this.baseUrl = '//127.0.0.1';
        //所有的请求接口
        this.url = {
            user:{
                login: this.baseUrl + '/user/login.htm',
                loginOut: this.baseUrl + '/user/loginOut.htm',
            }
        }
    }
}