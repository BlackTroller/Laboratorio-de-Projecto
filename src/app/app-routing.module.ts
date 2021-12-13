import { DecksTableComponent } from './decks-table/decks-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersDetComponent } from './users-det/users-det.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';
import { ExercisesDetComponent } from './exercises-det/exercises-det.component';
import { CardsDetComponent } from './cards-det/cards-det.component';
import { DecksDetComponent } from './decks-det/decks-det.component';

const routes: Routes = [
  {path: 'users', component: UsersTableComponent},
  {path: 'users/:id', component: UsersDetComponent},
  {path: 'decks', component: DecksTableComponent},
  {path: 'decks/:id', component: DecksDetComponent},
  {path: 'cards', component: CardsTableComponent},
  {path: 'cards/:id', component: CardsDetComponent},
  {path: 'exercises', component: ExercisesTableComponent},
  {path: 'exercises/:id', component: ExercisesDetComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
