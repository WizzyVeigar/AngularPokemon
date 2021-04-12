import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomPokemon } from '../CustomPokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input("CustomPokemon") pokemon: CustomPokemon;

  constructor(private route: Router) {   }

  ngOnInit(): void {    
  }

  ShowPokemonDetails(){
    this.route.navigateByUrl("/pokemon-Details", {state: this.pokemon});
  }
}
