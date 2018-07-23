import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, NgModule, Inject, PLATFORM_ID, Injector } from "@angular/core";
import { isPlatformServer } from "@angular/common";

@Injectable()
export class HttpInterCeptor implements HttpInterceptor {
    constructor(
        private injector: Injector,
        @Inject(PLATFORM_ID) private platformId: Object,

    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (isPlatformServer(this.platformId)) {
            var exreq: any = this.injector.get('REQUEST');
            let newreq = req.clone({ url: 'http://127.0.0.1:3000' + req.url, setHeaders: exreq.headers.cookie ? { "Cookie": exreq.headers.cookie } : {} })
            return next.handle(newreq)
        }

        return next.handle(req)
    }
}




