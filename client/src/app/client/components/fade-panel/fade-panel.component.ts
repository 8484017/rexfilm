import { Component, OnInit, Input, HostBinding } from '@angular/core';


@Component({
  selector: 'my-fade-panel',
  templateUrl: './fade-panel.component.html',
  styleUrls: ['./fade-panel.component.scss'],

})
export class FadePanelComponent implements OnInit {

  constructor() { }

  width: number = 991;
  @Input() name: string = ""
  isShow = false
  minWidth = false



  ngOnInit() {
    this.setButtonShow()
    window.onresize = (e) => {
      this.setButtonShow()
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
