import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable, Injector, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformServer } from "@angular/common";

@Injectable()
export class IsAdminResolver implements Resolve<boolean>{

    constructor(
        private http: HttpClient,
        private router: Router,

    ) { }
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        let r = await this.http.get('/api/isadmin', { responseType: "text" }).toPromise().then(s => true).catch(s => {

            this.router.navigateByUrl("/"); return false
        })
        return true

    }

}