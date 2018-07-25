import { Component, OnInit, Input, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'my-fade-panel',
  templateUrl: './fade-panel.component.html',
  styleUrls: ['./fade-panel.component.scss'],

})
export class FadePanelComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  width: number = 991;
  @Input() name: string = ""
  isShow = true
  minWidth = false



  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setButtonShow()
      window.onresize = (e) => {
        this.setButtonShow()
      }

    }
  }

  private setButtonShow() {
    if (window.innerWidth > this.width) {
      this.isShow = false
      this.minWidth = true
    } else {
      this.isShow = true
      this.minWidth = false

    }
  }


  toggleShow() {
    this.isShow = !this.isShow
  }

}
