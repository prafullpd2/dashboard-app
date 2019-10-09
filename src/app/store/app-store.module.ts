import {NgModule} from '@angular/core';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import * as fromApp from './board.reducer';

export interface AppState {
  boardReducer: fromApp.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  boardReducer: fromApp.boardReducer
};
@NgModule(
  {
    imports: [
      StoreModule.forRoot(appReducer)
    ],
    exports: [
      StoreModule
    ]
  }
)
export class AppStoreModule {

}
