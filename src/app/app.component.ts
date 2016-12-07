import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, Renderer ,RootRenderer } from '@angular/core';
import { Global } from './base/global';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router,
        private route: ActivatedRoute,
        private _global: Global,
    ) {
        renderer.listen(elementRef.nativeElement, 'load', (event: any) => {
            console.log('load');
        });
        renderer.listen(window, 'load', (event: any) => {
            var hasLogin = _global.hasLogin;
            if(hasLogin){
                router.navigateByUrl("home");
            }else{
                router.navigateByUrl("login");
            }
        });
    }
}
