import { Http, Request, RequestOptionsArgs, Response, RequestOptions,ConnectionBackend, Headers,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';

export class HttpInterceptor extends Http{
    global:Global

    constructor(
        backend:ConnectionBackend,
        defaultOptions:RequestOptions,
        global:Global
    ){
        super(backend, defaultOptions);
        this.global = global
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
        return this.requestHelper({method:RequestMethod.Get,url:url},options)
        // return super.get(url,options)
    };
    /**
     * Performs a request with `post` http method.
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        return this.requestHelper({body:body,method:RequestMethod.Post,url:url},options)
        // return super.post(url,body,options)
    };
    /**
     * Performs a request with `put` http method.
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        return this.requestHelper({body:body,method:RequestMethod.Put,url:url},options)
        // return super.put(url,body,options)
    };
    /**
     * Performs a request with `delete` http method.
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return this.requestHelper({method:RequestMethod.Delete,url:url},options)
        // return super.delete(url,options)
    };
    /**
     * Performs a request with `patch` http method.
     */
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        return this.requestHelper({body:body,method:RequestMethod.Patch,url:url},options)
        // return super.patch(url,body,options)
    };
    /**
     * Performs a request with `head` http method.
     */
    head(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return this.requestHelper({method:RequestMethod.Head,url:url},options)
        // return super.head(url,options)
    };
    /**
     * Performs a request with `options` http method.
     */
    options(url: string, options?: RequestOptionsArgs): Observable<Response>{
        return this.requestHelper({method:RequestMethod.Options,url:url},options)
        // return super.options(url,options)
    };

    /**
     * 处理所有的方法 添加登录验证
     * 
     * @private
     * @param {RequestOptionsArgs} requestArgs
     * @param {RequestOptionsArgs} [options]
     * @returns {Observable<Response>}
     * 
     * @memberOf HttpInterceptor
     */
    private requestHelper(requestArgs: RequestOptionsArgs, options?: RequestOptionsArgs): Observable<Response> {
        let _options = new RequestOptions(requestArgs);
        if(options){
            _options = _options.merge(options);
        }
        var req = new Request(_options);
        if (!req.headers) {
            req.headers = new Headers();
        }
        var tokenKey = this.global.tokenKey;
        var tokenValue = this.global.tokenValue;
        req.headers.set(tokenKey,tokenValue);
        return this.request(req,_options);
    }
}