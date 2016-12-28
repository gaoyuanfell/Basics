import {
    BrowserXhr,
    ResponseOptions,
    XHRBackend,
    XSRFStrategy
} from '@angular/http';
import { HttpXHRBackend } from './httpInterceptor';
import { Global } from './global';

const $http = {
    provide: XHRBackend, 
    useFactory: (_browserXHR: BrowserXhr, _baseResponseOptions: ResponseOptions, _xsrfStrategy: XSRFStrategy,global:Global) => {return new HttpXHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy,global)}, 
    deps: [BrowserXhr, ResponseOptions, XSRFStrategy,Global]
}

const Interceptor:any[] = [
    $http
]

export {Interceptor}