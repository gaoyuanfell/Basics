import * as url from 'url';
import * as events from 'events';
import { Component, OnInit } from '@angular/core';

import {fadeInLOutR} from '../../animations/fade-in-l-out-r'

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss'],
    animations:[fadeInLOutR]
})
export class ConfigComponent implements OnInit {
    map:any
    constructor() { }
    
    event:events;
    url:url.Url
    ngOnInit() {
        this.event = new events();
        this.event.addListener('test',function(){
            console.info('ok')
        })
        this.event.emit('test');
        this.url = url.parse('http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ')
        console.info(this.url);
        
        this.map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 8,
          center: [116.39,39.9]
        });
    }
}
