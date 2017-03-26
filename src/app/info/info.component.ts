import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../animations/fade-in-out';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
    animations:[fadeInOut]
})
export class InfoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
