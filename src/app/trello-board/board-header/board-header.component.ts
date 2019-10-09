import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store/app-store.module';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ShowMenuAction} from '../../store/board.actions';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css']
})
export class BoardHeaderComponent implements OnInit {
  showMenu: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.showMenu = this.store.select('boardReducer')
      .pipe(map(value => value.showMenu));
  }

  showMenuClick() {
    this.store.dispatch(new ShowMenuAction());
  }
}
