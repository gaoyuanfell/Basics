import { Component, OnInit } from '@angular/core';

import {fadeInLOutR} from '../../animations/fade-in-l-out-r'

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss'],
    animations:[fadeInLOutR]
})
export class ConfigComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
