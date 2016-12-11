import {
    BrowserXhr,
    ConnectionBackend,
    CookieXSRFStrategy,
    Headers,
    Http,
    Request,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    ResponseOptions,
    URLSearchParams,
    XHRBackend,
    XSRFStrategy,
    BaseRequestOptions
} from '@angular/http';
import { HttpXHRBackend } from './httpInterceptor';
import { Global } from './global';

/**
 * http 请求拦截
 */
/*const http = {
    provide: Http, 
    useFactory: (backend: ConnectionBackend, defaultOptions: RequestOptions ,global:Global) => {return new HttpInterceptor(backend, defaultOptions, global)}, 
    deps: [XHRBackend, RequestOptions, Global]
}*/

const $http = {
    provide: XHRBackend, 
    useFactory: (_browserXHR: BrowserXhr, _baseResponseOptions: ResponseOptions, _xsrfStrategy: XSRFStrategy,global:Global) => {return new HttpXHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy,global)}, 
    deps: [BrowserXhr, ResponseOptions, XSRFStrategy,Global]
}

const Interceptor:any[] = [
    $http
]

export {Interceptor}