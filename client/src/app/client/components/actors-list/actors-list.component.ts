import { Component, OnInit, Input } from '@angular/core';
import { Name } from '../../../../../../models/name.model';

@Component({
  selector: 'my-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  constructor() { }
  @Input() names: Name[]
  @Input() title: string
  @Input() full: boolean = true;
  ngOnInit() {
  }

}
