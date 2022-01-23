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
import { DecksaddComponent } from './decksadd/decksadd.component';
import { CardsaddComponent } from './cardsadd/cardsadd.component';
import { ExercisesaddComponent } from './exercisesadd/exercisesadd.component';

const routes: Routes = [
  {path: 'users', component: UsersTableComponent},
  {path: 'users/:id', component: UsersDetComponent},
  {path: 'decks', component: DecksTableComponent},
  {path: 'decks/:id', component: DecksDetComponent},
  {path: 'decksadd', component: DecksaddComponent},
  {path: 'cards', component: CardsTableComponent},
  {path: 'cards/:id', component: CardsDetComponent},
  {path: 'cardsadd', component: CardsaddComponent},
  {path: 'exercises', component: ExercisesTableComponent},
  {path: 'exercises/:id', component: ExercisesDetComponent},
  {path: 'exercisesadd', component: ExercisesaddComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
