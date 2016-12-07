import { Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, URLSearchParams,ConnectionBackend, Headers} from '@angular/http';
import { HttpInterceptor } from './httpInterceptor';
import { Global } from './global';

const Interceptor:any[] = [
    { provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: RequestOptions ,global:Global) => {return new HttpInterceptor(backend, defaultOptions, global)}, deps: [XHRBackend, RequestOptions, Global]}
]

export {Interceptor}