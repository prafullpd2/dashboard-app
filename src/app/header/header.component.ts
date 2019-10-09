import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store.module';
import * as AppActions from '../store/board.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addNewList($event: MouseEvent) {

    this.store.dispatch(new AppActions.AddListAction());
  }
}
