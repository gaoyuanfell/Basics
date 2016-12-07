import {Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, URLSearchParams,ConnectionBackend, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class HttpInterceptor extends Http{
    constructor(
        backend:ConnectionBackend,
        defaultOptions:RequestOptions
    ){
        super(backend, defaultOptions);
    }
    
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>{
        return super.request(url,options)
    };
    /**
     * Performs a request with `get` http method.
     */
    get(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return super.get(url,options)
    };
    /**
     * Performs a request with `post` http method.
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        console.info(body);
        return super.post(url,body,options)
    };
    /**
     * Performs a request with `put` http method.
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        return super.put(url,body,options)
    };
    /**
     * Performs a request with `delete` http method.
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return super.delete(url,options)
    };
    /**
     * Performs a request with `patch` http method.
     */
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        return super.patch(url,body,options)
    };
    /**
     * Performs a request with `head` http method.
     */
    head(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return super.head(url,options)
    };
    /**
     * Performs a request with `options` http method.
     */
    options(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return super.options(url,options)
    };
}