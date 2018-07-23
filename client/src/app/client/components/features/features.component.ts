import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor() {

  }
  @Input() features: string[]
  featuresLetgth: number
  needBtn: boolean = false;
  btnShow: boolean = false;
  ngOnChanges() {
    this.featuresLetgth = this.features.length;
    if (this.featuresLetgth > 2) {
      this.needBtn = true
    }
  }

}
