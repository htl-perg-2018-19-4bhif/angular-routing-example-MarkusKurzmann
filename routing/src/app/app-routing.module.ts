import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';

const routes: Routes = [
  {path: 'pokemon', component: PokeListComponent},
  {path: 'pokemon/:pokemonID', component: PokeDetailComponent},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
