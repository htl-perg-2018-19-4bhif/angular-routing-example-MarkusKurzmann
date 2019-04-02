import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PokeApiService } from '../poke-api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'details'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pokeapi: PokeApiService, public dialog: MatDialog) {
    this.getPokemon();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPokemon() {
    this.pokeapi.get("pokemon?offset=0&limit=20000").subscribe(
      resultArray => {
        let obj = JSON.stringify(resultArray);
        let names: string[] = this.getNames(obj,"name");

        let counter = 0;
        let pokemonArray: Pokemon[] = [];
        names.forEach(i => {
          var pokemon = <Pokemon>{};
          pokemon.id = parseInt(resultArray['results'][counter]['url'].split('/')[resultArray['results'][counter]['url'].split('/').length-2], 10);
          pokemon.name = i;
          pokemonArray.push(pokemon);
          counter++;
        });

        this.dataSource = new MatTableDataSource(<Pokemon[]>pokemonArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.connect();
        return true;
      },
      error => console.log("GET Error :: " + error)
    )
  }

  getNames(msg: string, filter: string) {
    console.log(filter);
    let pokemonNamesArray: string[] = []
    var obj = JSON.parse(msg, function (key, value) {
      if (key == filter) {
        pokemonNamesArray.push(value);
      } else {
      }
    });
    return pokemonNamesArray;
  }
}
