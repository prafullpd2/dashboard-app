import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrelloBoardComponent} from './trello-board/trello-board.component';

const routes: Routes = [
  {path: 'board', component: TrelloBoardComponent},
  {path: '', redirectTo: 'board', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
