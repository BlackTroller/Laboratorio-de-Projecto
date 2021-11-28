import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersTableComponent } from './users-table/users-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DecksTableComponent } from './decks-table/decks-table.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersTableComponent,
    DecksTableComponent,
    CardsTableComponent,
    ExercisesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
