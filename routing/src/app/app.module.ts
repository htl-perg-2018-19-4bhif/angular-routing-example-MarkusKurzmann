import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';

import { MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, 
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatPaginator,
  MatExpansionModule,
  MatListModule} from "@angular/material";
import { PokeDetailComponent } from './poke-detail/poke-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
