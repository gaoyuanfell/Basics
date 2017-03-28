import {Headers, Http} from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    constructor(private router: Router, private http: Http) { }
    ngOnInit() {
        // this.http.get('https://angular.io/').subscribe( (data:any) => {
        //     console.info(data)
        // } )
        // this.http.get('http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ').subscribe( (data:any) => {
        //     console.info(data)
        // } )
        // this.http.post('http://localhost:8082/user/findPage.htm',{},{}).subscribe( (data:any) => {
        //     console.info(data)
        // } )
        // this.http.post('http://180.97.75.144:8035/ABCLotteryWeb/user/lg',{"UA":"13870814611","PD":"a626e16041e74277ba102f259f66dda9"}).subscribe( (data:any) => {
        //     console.info(data)
        // } )
    }

    //测试
    isSelected() {
        return true;
    }

}
