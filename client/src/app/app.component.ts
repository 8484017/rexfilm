import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      require('delayed-scroll-restoration-polyfill')
    }
  }
}
