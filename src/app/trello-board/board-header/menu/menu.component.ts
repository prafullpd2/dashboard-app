import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app-store.module';
import {map} from 'rxjs/operators';
import {ShowMenuAction} from '../../../store/board.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // showMenu: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   /* this.showMenu = this.store.select('boardReducer')
      .pipe(map(value => value.showMenu));*/
  }

  hideMenu() {
    this.store.dispatch(new ShowMenuAction());
  }
}
