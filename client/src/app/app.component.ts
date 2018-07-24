import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { Router, NavigationStart, NavigationEnd, ResolveEnd } from '@angular/router';
import { pairwise, switchMap, filter } from 'rxjs/operators';


@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,

  ) {

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      require('delayed-scroll-restoration-polyfill')
      this.router.events.pipe(filter(s => s instanceof NavigationStart || s instanceof NavigationEnd), pairwise()).subscribe(s => {

        if (s[0] instanceof NavigationStart && (s["0"] as NavigationStart).navigationTrigger === "imperative" && s["1"] instanceof NavigationEnd) {
          setTimeout(() => {
            console.log("OK&");
            window.scrollTo(0, 0)
          }, 0);
        }
      })


    }

  }
}
