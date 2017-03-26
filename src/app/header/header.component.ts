import { Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() title: String;
    showBlack: Boolean;

    constructor(private router: Router) { }

    ngOnInit() {
        let arr: Array<String> = ['/user', '/info', '/home'];
        let url: String = this.router.url;
        if (arr.indexOf(url) == -1) {
            this.showBlack = true
        } else {
            this.showBlack = false
        }
    }

    black() {
        window.history.go(-1);
    }
}
