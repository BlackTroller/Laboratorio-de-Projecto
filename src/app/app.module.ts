import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { DecksTableComponent } from './decks-table/decks-table.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';
import { UsersDetComponent } from './users-det/users-det.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersTableComponent,
    DecksTableComponent,
    CardsTableComponent,
    ExercisesTableComponent,
    UsersDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
