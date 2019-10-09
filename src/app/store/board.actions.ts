import {Action} from '@ngrx/store';
import {List} from '../trello-board/models/list.model';
import {Card} from '../trello-board/models/card.model';


export const ADD_LIST = '[APP] Add List';
export const ADD_CARD = '[APP] Add Card';
export const DELETE_CARD = '[APP] Delete Card';
export const DELETE_LIST = '[APP] Delete List';
export const SHOW_MENU = '[APP] Show Menu';
export const RENAME_LIST = '[APP] Rename List';
export const SELECT_LIST_INDEX = '[APP] Select List Index';
export const SELECT_CARD_INDEX = '[APP] Select Card Index';
export const DESELECT_LIST_INDEX = '[APP] Deselect List Index';
export const DESELECT_CARD_INDEX = '[APP] Deselect Card Index';


export class AddListAction implements Action {
  readonly type = ADD_LIST;
  constructor( ) {}
}
export class AddCardAction implements Action {
  readonly type = ADD_CARD;
  constructor( public payload: {card: Card, listIndex: number, list ?: List}) {}
}
export class DeleteCardAction implements Action {
  readonly type = DELETE_CARD;
  constructor( public payload?: {cardID?: number, listIndex?: number, card?: Card, list ?: List}) {}
}
export class DeleteListAction implements Action {
  readonly type = DELETE_LIST;
  constructor( public payload?: { listID?: number, list ?: List}) {}
}
export class ShowMenuAction implements Action {
  readonly type  = SHOW_MENU;
}
export class RenameListAction implements Action {
  readonly type = RENAME_LIST;
  constructor(public payload: {listName: string, listIndex: number}) {}
}
export class SelectListIndexAction implements Action {
    readonly type  = SELECT_LIST_INDEX;
    constructor( public payload: {listIndex: number}) {}
}
export class SelectCardIndexAction implements Action {
  readonly type  = SELECT_CARD_INDEX;
  constructor( public payload: {cardIndex: number}) {}
}
export class DeselectListIndexAction implements Action {
  readonly type  = DESELECT_LIST_INDEX;
  constructor( ) {}
}
export class DeselectCardIndexAction implements Action {
  readonly type  = DESELECT_CARD_INDEX;
  constructor( ) {}
}
export type BoardActions =
  AddCardAction |
  DeleteCardAction |
  AddListAction |
  DeleteListAction|
  ShowMenuAction|
  RenameListAction|
  SelectCardIndexAction|
  SelectListIndexAction|
  DeselectCardIndexAction|
  DeselectListIndexAction;



