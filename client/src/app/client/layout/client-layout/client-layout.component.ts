import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MetrikaService } from '../../../services/metrika.service';

@Component({
  selector: 'my-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientLayoutComponent implements OnInit {

  constructor(
    private metrik: MetrikaService
  ) { }

  ngOnInit() {
    this.metrik.EnableMetrikka()
  }

  ngOnDestroy() {
    this.metrik.DisableMetrika()
  }

}
