import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ParserService } from '../../../services/parser.service';
import { interval, Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'my-parser-page-admin',
  templateUrl: './parser-page-admin.component.html',
  styleUrls: ['./parser-page-admin.component.scss']
})
export class ParserPageAdminComponent implements OnInit {

  constructor(
    private parsServ: ParserService,
    @Inject(PLATFORM_ID) private platformId: Object,

  ) { }
  status: any = {}
  timer$: Subscription
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      this.timer$ = interval(3000).pipe(flatMap(s => this.parsServ.GetStatus())).subscribe(s => this.status = s)

    }
  }


  startParser() {
    this.parsServ.StartParser().toPromise();
    this.parsServ.GetStatus().toPromise()
  }


  cancelParser() {
    this.parsServ.CanselParser().toPromise();
    this.parsServ.GetStatus().toPromise();
  }

  ngOnDestroy() {
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }

}
