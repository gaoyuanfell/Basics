/**
 * Cookie 操作
 * 
 * @class Cookie
 */
class Cookie{

    constructor(){}

    static get(t:string,e?:boolean){
        let i = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
            n = i.exec(document.cookie);
        return n ? e ? decodeURIComponent(n[2]) : n[2] : ""
    }
    static set(t:string, e:string, i:any, n?:boolean){
        var o = i.expires;
        document.cookie = t + "=" + (n ? encodeURIComponent(e) : e) + (i.path ? "; path=" + i.path : "") + (o ? "; expires=" + o.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "")
    }
    static remove(t:string){
        var e = new Date();
        this.set(t, "", {
            path: "/",
            expires: e
        })
    }
}

export {Cookie}