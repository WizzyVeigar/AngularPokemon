import { Component, Input, OnInit } from '@angular/core';
import { CustomPokemon } from '../CustomPokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input("CustomPokemon") pokemon: CustomPokemon;

  constructor() {   }

  ngOnInit(): void {    
  }

}
