import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  host: { class: 'd-flex align-content-center' }
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input() rating: number = 5
  get kp() {
    return new Array(Math.floor(this.rating / 2));
  }
  get kpOfcet() {
    return new Array(Math.ceil(5 - (this.rating / 2)));

  }
  ngOnInit() {
  }

}
