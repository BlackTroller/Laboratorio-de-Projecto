import { DecksComponent } from './decks/decks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CardsComponent } from './cards/cards.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'decks', component: DecksComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
