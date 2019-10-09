import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';
import { BoardHeaderComponent } from './trello-board/board-header/board-header.component';
import { BoardListsComponent } from './trello-board/board-lists/board-lists.component';
import { ListComponent } from './trello-board/board-lists/list/list.component';
import { MenuComponent } from './trello-board/board-header/menu/menu.component';
import {AppStoreModule} from './store/app-store.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrelloBoardComponent,
    BoardHeaderComponent,
    BoardListsComponent,
    ListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
