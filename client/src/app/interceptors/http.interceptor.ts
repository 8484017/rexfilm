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

        var headers = new HttpHeaders()

        if (isPlatformServer(this.platformId)) {
            var serreq: any = this.injector.get('REQUEST');

            headers = Object.assign(headers, req.headers)
            headers = headers.append("cookie", serreq.headers.cookie)

            let newreq = req.clone({ url: "http://127.0.0.1:3000" + req.url, headers: headers, withCredentials: true })


            return next.handle(newreq);
        }

        return next.handle(req)
    }
}


