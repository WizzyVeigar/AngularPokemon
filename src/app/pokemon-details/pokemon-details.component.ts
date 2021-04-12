import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomPokemon} from '../CustomPokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private route : Router) { }

  display = true;
  public pokemon : CustomPokemon;
  ngOnInit(): void {
    this.pokemon = history.state;
    console.log(this.pokemon.name);
  }

}
