import {Actions} from '@ngrx/effects';
import {List} from '../trello-board/models/list.model';
import * as AppActions from './board.actions';

export interface State {
    lists: List[];
    showMenu: boolean;
    selectCardIndex: number;
    selectListIndex: number;
}
const initialState: State = {
  lists: [],
  showMenu: false,
  selectCardIndex: null,
  selectListIndex: null
};

export function boardReducer(state: State = initialState, action: AppActions.BoardActions): State {
  let lists: List[];

  switch (action.type) {

    case AppActions.ADD_LIST:
      const list: List = {
        cards: [],
        name: 'Edit list-name'
      };
      return {
        ...state,
        lists: [ ...state.lists , list]
      };
    case AppActions.ADD_CARD:
      const card = action.payload.card;
      lists = [...state.lists];
      lists[action.payload.listIndex].cards = [...lists[action.payload.listIndex].cards, card];
      return {
        ...state,
        lists
      };
    case AppActions.SHOW_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };
    case AppActions.RENAME_LIST:
      lists = [...state.lists];
      lists [action.payload.listIndex].name = action.payload.listName;
      return {
        ...state,
        lists
      };
    case AppActions.SELECT_LIST_INDEX:
      return {
        ...state,
        selectListIndex: action.payload.listIndex
      };
    case AppActions.SELECT_CARD_INDEX:
      return {
        ...state,
        selectCardIndex: action.payload.cardIndex
      };
    case AppActions.DESELECT_CARD_INDEX:
      return {
        ...state,
        selectCardIndex: null
      };
    case AppActions.DESELECT_LIST_INDEX:
      return {
        ...state,
        selectListIndex: null
      };
    case AppActions.DELETE_CARD:
      lists =  [...state.lists];
      lists[state.selectListIndex].cards.splice(state.selectCardIndex, 1);
      return {
        ...state,
        lists
      };
    case AppActions.DELETE_LIST:
      lists =  [...state.lists];
      lists.splice(state.selectListIndex, 1);
      return {
        ...state,
        lists
      };
    default:
      return state;
  }

}
