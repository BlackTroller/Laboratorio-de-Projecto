import { DecksTableComponent } from './decks-table/decks-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersDetComponent } from './users-det/users-det.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';

const routes: Routes = [
  {path: 'users', component: UsersTableComponent},
  {path: 'users/:id', component: UsersDetComponent},
  {path: 'decks', component: DecksTableComponent},
  {path: 'cards', component: CardsTableComponent},
  {path: 'exercises', component: ExercisesTableComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
