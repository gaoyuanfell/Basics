import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../../animations/fade-in-out';

@Component({
    selector: 'app-home',
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.scss'],
    animations: [fadeInOut]
})
export class Home2Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
