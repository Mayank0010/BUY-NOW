import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';

import { User } from 'src/app/user';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  logoutEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  logout() {
    this.logoutEvent.emit();
  }
}
