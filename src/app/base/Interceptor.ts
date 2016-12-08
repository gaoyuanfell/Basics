import { Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, URLSearchParams,ConnectionBackend, Headers} from '@angular/http';
import { HttpInterceptor } from './httpInterceptor';
import { Global } from './global';

/**
 * http 请求拦截
 */
const http = {
    provide: Http, 
    useFactory: (backend: ConnectionBackend, defaultOptions: RequestOptions ,global:Global) => {return new HttpInterceptor(backend, defaultOptions, global)}, 
    deps: [XHRBackend, RequestOptions, Global]
}
const Interceptor:any[] = [
    http
]

export {Interceptor}