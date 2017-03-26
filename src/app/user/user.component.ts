import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../animations/fade-in-out';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [fadeInOut]
})
export class UserComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
