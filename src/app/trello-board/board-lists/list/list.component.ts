import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormControlName, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import {List} from '../../models/list.model';
import {Card} from '../../models/card.model';
import {AppState} from '../../../store/app-store.module';
import * as AppActions from '../../../store/board.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Input() listIndex: number;
  showAddNewCard = false;
  newCardText: FormControl;
  listName: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.listName = new FormControl(this.list.name);
    this.newCardText = new FormControl(null, [Validators.required]);
    this.listName.valueChanges.subscribe((val) => {
      console.log(val);
    });
    this.listName.statusChanges.subscribe((val) => {
      // console.log(val);
    });
    // this.listName.e
  }

  addCard($event: MouseEvent) {
    this.showAddNewCard = true;
  }

  discardNewCard() {
    this.showAddNewCard = false;
    this.newCardText.reset();
  }

  saveCard() {
    const card: Card = {
      name: this.newCardText.value
    };
    this.store.dispatch(new AppActions.AddCardAction({card, listIndex: this.listIndex}));
    this.showAddNewCard = false;
    this.newCardText.reset();
  }

  onListNameChange($event: Event) {
    // console.log($event, this.listName.value);
    this.store.dispatch(new AppActions.RenameListAction({ listName: this.listName.value, listIndex: this.listIndex}));
  }

  onCardContextMenuClick($event: MouseEvent, cardIndex: number) {
    $event.preventDefault();
    // alert('delete ' + cardIndex);
    this.store.dispatch(new AppActions.SelectCardIndexAction({cardIndex}));
    this.store.dispatch(new AppActions.SelectListIndexAction({listIndex: this.listIndex}));
    if (confirm('Do you want to delete this card?')) {
      this.store.dispatch(new AppActions.DeleteCardAction());
      this.store.dispatch(new AppActions.DeselectCardIndexAction());
      this.store.dispatch(new AppActions.DeselectListIndexAction());

    } else {
      this.store.dispatch(new AppActions.DeselectCardIndexAction());
      this.store.dispatch(new AppActions.DeselectListIndexAction());
    }
  }

  onListContextMenuClick($event: MouseEvent, listIndex?: number) {
    $event.preventDefault();
    this.store.dispatch(new AppActions.SelectListIndexAction({listIndex: this.listIndex}));
    if (confirm('Do you want to delete this complete list?')) {
      this.store.dispatch(new AppActions.DeleteListAction());
      this.store.dispatch(new AppActions.DeselectCardIndexAction());
      this.store.dispatch(new AppActions.DeselectListIndexAction());

    } else {
      this.store.dispatch(new AppActions.DeselectCardIndexAction());
      this.store.dispatch(new AppActions.DeselectListIndexAction());
    }
  }
}
