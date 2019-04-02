import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Pokemon } from '../pokemon';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: Pokemon = <Pokemon>{};

  pokemonID: number;

  constructor(private pokeapi: PokeApiService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokemonID = parseInt(params.get('pokemonID'));
      this.retrievePokemon();
    });
    
  }

  retrievePokemon(){
    this.pokeapi.get("pokemon/"+((this.pokemonID-1)+2)).subscribe(resultArray => {
      this.pokemon.id = this.pokemonID;
      this.pokemon.name = resultArray['name'];
      this.pokemon.abilities = [];
      this.pokemon.pic = resultArray['sprites']['front_default'];
      resultArray['abilities'].forEach(element => {
        this.pokemon.abilities.push(element['ability'].name);
      });
    });
  }

}
