import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {State} from '../../store/board.reducer';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store.module';
import {map} from 'rxjs/operators';
import {List} from '../models/list.model';

@Component({
  selector: 'app-board-lists',
  templateUrl: './board-lists.component.html',
  styleUrls: ['./board-lists.component.css']
})
export class BoardListsComponent implements OnInit {

  lists: Observable<List[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.lists = this.store.select('boardReducer').pipe(map((val) => val.lists ));
  }

}
