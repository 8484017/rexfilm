import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetrikaService {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  private subs: Subscription
  private yaCounter
  EnableMetrikka() {
    if (isPlatformBrowser(this.platformId)) {
      this.yaCounter = new Ya.Metrika({ id: 49735270, clickmap: true, trackLinks: true, accurateTrackBounce: true });
      this.yaCounter['hit'](window.location.href)
      this.subs = this.router.events.pipe(filter(s => s instanceof NavigationEnd)).subscribe(s => {
        this.yaCounter['hit'](window.location.href)
      })
    }
  }

  DisableMetrika() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}


